import { NextResponse } from "next/server";
import { connection } from "@/libs/cdmon";

export async function GET() {
  const result = await connection.query("SELECT NOW()");
  console.log(result);
  return NextResponse.json({ hello: "word", test: `${process.env.DB_HOST}` });
}
