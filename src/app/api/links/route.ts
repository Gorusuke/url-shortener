import { NextResponse } from "next/server";
import { client } from '@/db/turso'
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  const { rows } = await client.execute("SELECT * FROM links INNER JOIN users_link ON links.shortUrl = users_link.shortUrl");
  
  if(session && session.user) {
    const getLinksByUser = rows.filter(link => link.email === session.user!.email)
    return NextResponse.json({data: getLinksByUser}, {status: 200})
  }
  
  return NextResponse.json({message: 'Log in'}, {status: 200})
}