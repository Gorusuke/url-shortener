import { NextResponse } from "next/server";
import { client } from "./db/turso";
import { getValidUrl } from "./lib/utils";

export default async function middleware(req: Request) {
  const url = new URL(req.url);
  const { href, origin } = url
  const shortUrl = href.split('go/').at(-1)!
  if(href.includes('go/')) {
    const { rows } = await client.execute({
      sql: "SELECT originalUrl FROM links WHERE shortUrl = ?",
      args: [shortUrl]
    })
    const { originalUrl } = rows[0] ?? []
    if(originalUrl) {
      const validUrl = getValidUrl(originalUrl as string)
      return NextResponse.redirect(validUrl)
    } else {
      return NextResponse.redirect(origin)
    }
  }
}