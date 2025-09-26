import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import prisma from "@/app/db";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { query, roomid } = body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${query}`,
      config: {
        systemInstruction: "you are an AI model",
      },
    });
    if (!response) {
      return NextResponse.json({
        success: false,
        message: "there was some error with gemini returning response",
      });
    }
    const chat = await prisma.chats.create({
      data: {
        text: response.text!,
        userid: 1,
        roomid: roomid,
      },
    });
    return NextResponse.json({
      success: true,
      message: response.text,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: e,
    });
  }
}
