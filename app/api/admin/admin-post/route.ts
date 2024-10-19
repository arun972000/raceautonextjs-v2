import db from "@/lib/db";
import { RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const page: any = searchParams.get("page");

  const limit = 10;
  const offset = (page - 1) * limit;

  let query = `
    SELECT posts.id, posts.image_small, posts.title, posts.title_slug, posts.pageviews, posts.created_at, posts.featured_order, posts.slider_order,
           posts.user_id, posts.is_slider, posts.is_breaking, posts.is_featured, posts.is_recommended, 
           posts.category_id, categories.color AS color, categories.name_slug AS name_slug, 
           categories.parent_id AS parent_id, categories.name AS sub_category, 
           users.username AS username 
    FROM posts 
    INNER JOIN users ON posts.user_id = users.id
    INNER JOIN categories ON posts.category_id = categories.id 
    WHERE 1 = 1`;

  let totalPostQuery = `
  SELECT posts.id, posts.image_small, posts.title, posts.pageviews, posts.title_slug, posts.created_at, 
         posts.user_id, posts.is_slider, posts.is_breaking, posts.is_featured, 
         posts.category_id, categories.color AS color, categories.name_slug AS name_slug, 
         categories.parent_id AS parent_id, categories.name AS sub_category, 
         users.username AS username 
  FROM posts 
  INNER JOIN users ON posts.user_id = users.id
  INNER JOIN categories ON posts.category_id = categories.id 
  WHERE 1 = 1`;

  const queryParams: any = [];

  query += ` ORDER BY posts.created_at DESC LIMIT 10 OFFSET ${offset}`;
  try {
    const [filteredRows] = await db.execute<RowDataPacket[]>(
      query,
      queryParams
    );
    const [totalPosts] = await db.execute<RowDataPacket[]>(
      totalPostQuery,
      queryParams
    );

    const [category] = await db.execute<RowDataPacket[]>(
      `SELECT parent_id, name, name_slug, id FROM categories WHERE parent_id = 0`
    );

    const results = filteredRows.map((item) => {
      const findParent = category.find((obj) => item.parent_id == obj.id);

      if (findParent) {
        return {
          ...item,
          main_category: findParent.name,
          main_category_slug: findParent.name_slug,
        };
      } else {
        return { ...item, main_category: null, main_category_slug: null };
      }
    });

    return NextResponse.json({ data: results, totalPost: totalPosts.length });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
