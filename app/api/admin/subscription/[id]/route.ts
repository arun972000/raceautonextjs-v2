import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextResponse) {
  const { pathname } = new URL(req.url);
  const id = pathname.split("/").pop();
  try {
    const [results] = await db.execute(
      `SELECT * FROM subscription_plan WHERE id = ${id}`
    );
    return NextResponse.json(results);
  } catch (err) {
    console.log(err);
    return NextResponse.json("internal server error");
  }
}

export async function PUT(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const id = pathname.split("/").pop();
  const payload = await req.json();
  try {
    const query = [
      payload.plan,
      payload.platinum,
      payload.gold,
      payload.silver,
      payload.bronze,
      id,
    ];
    await db.execute(
      `UPDATE subscription_plan SET plan = ?, platinum = ?, gold = ?, silver = ?, bronze = ? WHERE id = ?`,
      query
    );
    return NextResponse.json("updated plan");
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: "internal server error" }, { status: 500 });
  }
}