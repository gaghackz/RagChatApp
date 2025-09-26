import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db"

export async function POST(req: NextRequest) {
  try {
    
    const body = await req.json();
    const { clerkid,message,roomid} = body;
    


    const chat = await prisma.chats.create({
        data:{
          
            text:message,
            userid:clerkid,
            roomid: roomid
        }
    })

    if(!chat){
        NextResponse.json({
            success:false,
            message:"chatnotadded"
        })
    }
    NextResponse.json({
        success:true,
        message:"chat added"
    })

  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
