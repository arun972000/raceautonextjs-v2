import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const [results] = await db.execute(
      `SELECT * FROM newsletter_ad WHERE id = 1`,
    );

    return NextResponse.json(results);
  } catch (err) {
    console.log(err);
    return NextResponse.json("internal server error", { status: 500 });
  }
}
