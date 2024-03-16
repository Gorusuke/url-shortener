import { NextResponse } from "next/server";
import { client } from '@/db/turso'
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  
  if(session && session.user) {
    const { email } = session.user
    const { rows } = await client.execute({
      sql: "SELECT * FROM links INNER JOIN users_link ON links.shortUrl = users_link.shortUrl WHERE email = ?",
      args: [email as string]
    });
    return NextResponse.json({data: rows}, {status: 200})
  } 
  return NextResponse.json({message: 'Log in'}, {status: 200})
}