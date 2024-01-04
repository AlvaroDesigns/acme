import { NextResponse } from "next/server";
import { conn } from "@/libs/mysqls";

export async function GET() {
  const result = await conn.query("SELECT NOW()");
  console.log(result);
  return NextResponse.json({ hello: "word", test: `${process.env.DB_HOST}` });
}
