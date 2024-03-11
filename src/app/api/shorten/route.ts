import { makeUrlShort } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { urlText } = await request.json()
  if(!urlText || urlText.length <= 0) {
    return NextResponse.json({status: 'Error: url not set.'}, {status: 400})
  }

  const shortUrl = makeUrlShort(6)

  // // Save it in a database
  // console.log(shortUrl)
  return NextResponse.json({urlText})
}
