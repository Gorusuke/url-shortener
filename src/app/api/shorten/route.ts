import { NextResponse } from "next/server";
import { makeUrlShort } from "@/lib/utils";
import { client } from '@/db/turso'

export async function POST(request: Request) {
  const { urlText, email } = await request.json()

  if(!urlText || urlText.length <= 0) {
    return NextResponse.json({status: 'Error: url not set.'}, {status: 400})
  }

  const shortUrl = makeUrlShort(6)

  try {
    const userResult = await client.execute({
      sql: "INSERT INTO users_link (shortUrl, email) VALUES (?, ?)",
      args: [shortUrl, email]
    });
    
    const result = await client.execute({
      sql: "INSERT INTO links (shortUrl, originalUrl) VALUES (? ,?)",
      args: [shortUrl, urlText]
    });

    if(userResult.rowsAffected === 0 || result.rowsAffected === 0) {
      return NextResponse.json({message: 'Url was not saved'}, {status: 404})
    }

    return NextResponse.json({data: result.rows.reverse()[0]}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: error}, {status: 500})
  }
}
