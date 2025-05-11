import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await db.cart.findMany();
    if (result.length === 0) {
      return NextResponse.json({ message: "No cart items found" }, { status: 404 });
    }
    return NextResponse.json({ data: result }); // Return all cart items
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}