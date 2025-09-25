import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db"

export async function POST(req: NextRequest) {
  try {
    
    const body = await req.json();
    const { username, email } = body;
    
    if (!username || !email) {
      return NextResponse.json(
        { success: false, message: "Username and email are required." },
        { status: 400 }
      );
    }
    const user = await prisma.user.create({
        data:{
            username,
            email
        }
    })
    return NextResponse.json({ success: true, message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
