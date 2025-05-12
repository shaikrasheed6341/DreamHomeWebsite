import { db } from "@/app/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    const result =await db.contact.findFirst()
    return NextResponse.json(result)
}