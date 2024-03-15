import { client } from "@/db/turso";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
  const { id } = params;
  try {
    const result = await client.execute({
      sql: "DELETE FROM links WHERE shortUrl = ?",
      args: [id]
    });
    if(result.rowsAffected === 0) {
      return NextResponse.json({message: 'Url not found'}, {status: 404})
    }
    return NextResponse.json({message: 'Url was deleted successfully'}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: error}, {status: 500})
  }
}

export async function PUT(request: Request, {params}: {params: {id: string}}) {
  const { id } = params;
  const { value } = await request.json()

  try {
    const result = await client.execute({
      sql: "UPDATE links SET originalUrl = ? WHERE shortUrl = ?",
      args: [value, id]
    });
    if(result.rowsAffected === 0) {
      return NextResponse.json({message: 'Url was not modified'}, {status: 404})
    }
    return NextResponse.json({message: 'Url was updated successfully'}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: error}, {status: 500})
  }
}