import { NextResponse } from "next/server";
import parseAndSave from "../utils/parseAndSave";
import extractText from "../utils/extractText";
import { chunkTextBySentence } from "../utils/chunker";
import { generateEmbeddings } from "../utils/embedder";
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

    const chunkedWords = chunkTextBySentence(extractedText);

    const embeddings = await generateEmbeddings(chunkedWords);

    return NextResponse.json({
      success: true,
      text: embeddings,
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
