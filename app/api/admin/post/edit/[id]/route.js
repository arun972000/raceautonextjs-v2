import db from "@/lib/db";
import {NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

export async function GET(req) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    const [joinedRow] = await db.execute(
      `SELECT posts.id, posts.image_mid, posts.summary, posts.title, posts.content, posts.market, posts.keywords, posts.pageviews, posts.user_id, posts.image_description, posts.is_slider, posts.is_featured, posts.is_breaking, posts.is_recommended, posts.category_id, categories.name_slug AS name_slug, categories.parent_id AS parent_id, categories.color AS color, categories.name AS sub_category, users.username AS username 
      FROM posts
      INNER JOIN users ON posts.user_id = users.id
      INNER JOIN categories ON posts.category_id = categories.id
      WHERE posts.id = ${id}`
    );

    const [category] = await db.execute(
      `SELECT parent_id, name, name_slug, id FROM categories WHERE parent_id = 0`
    );
    const [tags] = await db.execute(`SELECT * FROM tags WHERE post_id = ?`, [
      id,
    ]);

    const [additionalImages] = await db.execute(
      `SELECT image_big as image_mid FROM post_images WHERE post_id = ?`,
      [id]
    );

    const results = joinedRow.map((item) => {
      const findParent = category.find((obj) => item.parent_id == obj.id);

      if (findParent) {
        return {
          ...item,
          main_category: findParent.name,
          main_category_slug: findParent.name_slug,
          tag: tags,
          imageDefault: joinedRow[0].image_mid,
          additionalImages: additionalImages,
        };
      } else {
        return {
          ...item,
          main_category: "",
          main_category_slug: "",
          tag: tags,
          imageDefault: joinedRow[0].image_mid,
          additionalImages: additionalImages,
        };
      }
    });
    return NextResponse.json(results);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: "internel server err" }, { status: 500 });
  }
}


export async function PUT(req){
  try{
    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const summary = formData.get("summary");
    const category_id = formData.get("category_id");
    const keywords = formData.get("keywords");
    const tags = formData.get("tags");
    const is_slider = formData.get("is_slider");
    const is_featured = formData.get("is_featured");
    const is_recommended = formData.get("is_recommended");
    const is_breaking = formData.get("is_breaking");
    const user_id = 12;
    const image_description = formData.get("image_description");
    const market = formData.get("market");
    // const draftValue = formData.get("draft");
    // const scheduled = formData.get("schedule_time");
    const image_default = formData.get('image_default')

    const primaryUploadDir = path.join(
      process.cwd(),
      "public/uploads/images",
      'test'
    );

    if (!fs.existsSync(primaryUploadDir)) {
      fs.mkdirSync(primaryUploadDir, { recursive: true });

      const htmlContent = `<!DOCTYPE html>
          <html>
          <head>
            <title>403 Forbidden</title>
          </head>
          <body>
            <p>Directory access is forbidden.</p>
          </body>
          </html>`;

      fs.writeFileSync(`${destiny}/index.html`, htmlContent);
    }

    if(image_default){
      const firstFile = image_default;
      const firstFilename = firstFile.name;
      const firstFileExtension = path.extname(firstFilename);
      const newFirstFilename = `${uuidv4()}${firstFileExtension}`;
      const firstFilePath = path.join(primaryUploadDir, newFirstFilename);

      // Save the first file
      const firstFileBuffer = Buffer.from(await firstFile.arrayBuffer());
      fs.writeFileSync(firstFilePath, firstFileBuffer);
      console.log('image added')
    }
    
    return NextResponse.json('updated')
  }catch(err){
    console.log(err)
  }
}