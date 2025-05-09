import { NextRequest, NextResponse } from "next/server";
import { db } from "../../lib/db";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, phonenumber } = body;

    // Validate all fields
    if (!username || !email || !phonenumber) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Create new customer
    await db.customer.create({
      data: {
        username,
        email,
        phonenumber,
      },
    });

    return NextResponse.json({ message: "you form sudmited sucessfully" }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}