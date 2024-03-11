import { NextResponse } from "next/server";
import { makeUrlShort } from "@/lib/utils";
import { client } from '@/db/turso'

export async function POST(request: Request) {
  const { urlText } = await request.json()
  if(!urlText || urlText.length <= 0) {
    return NextResponse.json({status: 'Error: url not set.'}, {status: 400})
  }

  const shortUrl = makeUrlShort(6)
  
  // Save it in a database
  await client.execute({
    sql: "INSERT INTO links (shortUrl, originalUrl) VALUES (? ,?)",
    args: [shortUrl, urlText]
  });

  // return last record
  const result = await client.execute("SELECT rowid, shortUrl, originalUrl FROM links");
  return NextResponse.json({data: result.rows.reverse()[0]}, {status: 200})
}
