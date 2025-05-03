import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input fields
    if (!email || !password) {
      return NextResponse.json({ message: "Please fill all input fields" }, { status: 400 });
    }

    // Find user in the database
    const finduser = await db.user.findFirst({
      where: { email },
    });

    if (!finduser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Validate password
    const passwordValid = await bcrypt.compare(password, finduser.password);
    if (!passwordValid) {
      return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
    }

    // Ensure JWT_SECRET is defined
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    // Generate JWT
    const token = sign(
      { userId: finduser.id, email: finduser.email },
      jwtSecret,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ message: "You successfully logged in" }, { status: 200 });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 2 * 60 * 60,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  console.log("JWT_SECRET:", jwtSecret); // For debugging only; remove in production

  return NextResponse.json({ message: "I am login route, it is working" });
}
