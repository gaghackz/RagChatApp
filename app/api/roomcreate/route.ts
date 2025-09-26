import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db"

export async function POST(req: NextRequest) {
  try {
    
    const body = await req.json();
    const { clerkid } = body;
    


    const room = await prisma.chatroom.create({
        data:{
            userid:clerkid,
        }
    })

    if(!room){
        NextResponse.json({
            success:false,
            message:"room cannot be created"
        })
    }
    NextResponse.json({
        success:true,
        message:"room added"
    })

  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
