import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const query = `
      SELECT id, name, name_slug, description, keywords, show_at_homepage, 
             show_on_menu, color, block_type 
      FROM categories 
      WHERE parent_id = 0
    `;

    const [results] = await db.execute(query);

    return NextResponse.json(results);
  } catch (err) {
    console.error("Database query failed:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
