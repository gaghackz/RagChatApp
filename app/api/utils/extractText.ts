import pdf from "pdf-parse";
import Tesseract from "tesseract.js";
import fs from "fs";

export default async function extractText(filePath: any) {
  // Direct Extraction

  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  let extractedText = data.text;

  // Tesseract (either one will be used)
  if (!extractedText.trim()) {
    const ocrResult = await Tesseract.recognize(filePath, "eng");
    extractedText = ocrResult.data.text;
  }

  return extractedText;
}
