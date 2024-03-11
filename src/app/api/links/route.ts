import { NextResponse } from "next/server";
import { client } from '@/db/turso'

export async function GET() {
  const result = await client.execute("SELECT rowid, shortUrl, originalUrl FROM links");
  return NextResponse.json({data: result.rows}, {status: 200})
}