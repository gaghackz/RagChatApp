import { NextResponse } from "next/server";
import parseAndSave from "../utils/parseAndSave";
import extractText from "../utils/extractText";
import fs from "fs";
import path from "path";

// Ensure uploads folder exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

export async function POST(req: Request) {
  try {
    // Parse FormData
    const formData = await req.formData();
    const filePath: any = await parseAndSave(uploadDir, formData);

    let extractedText = await extractText(filePath);

    return NextResponse.json({
      success: true,
      text: extractedText,
    });
  } catch (err) {
    console.error("Upload Error:", err);
    return NextResponse.json({
      success: false,
      message: "Failed to process PDF",
      error: String(err),
    });
  }
}
