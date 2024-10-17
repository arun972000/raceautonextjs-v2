import db from "@/lib/db";
import { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [totalNews] = await db.execute<RowDataPacket[]>(`SELECT COUNT(*) AS total_news FROM posts WHERE YEAR(created_at) = 2024 AND MONTH(created_at) = 2`)

        // const [userPostCount] = await db.execute(`SELECT user_id, COUNT(*) AS post_count FROM posts WHERE YEAR(created_at) = 2024 AND MONTH(created_at) = 2 GROUP BY user_id`)
        
        const [userPostCountv2] = await db.execute(`
            SELECT users.username, COUNT(posts.user_id) AS post_count 
            FROM posts
            JOIN users ON posts.user_id = users.id
            WHERE YEAR(posts.created_at) = 2024 AND MONTH(posts.created_at) = 2
            GROUP BY users.username
          `);

        return NextResponse.json({userPostCountv2, totalnews:totalNews[0].total_news})

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 })
    }
}