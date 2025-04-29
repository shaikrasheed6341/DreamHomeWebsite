import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db'; // adjust path if needed

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    const user = await db.user.create({
      data: {
        name,
        email,
        
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
