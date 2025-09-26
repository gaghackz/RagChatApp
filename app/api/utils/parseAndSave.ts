import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export default async function parseAndSave(uploadDir: any, formData: any) {
  const file = formData.get("pdf") as File;

  // Save file to disk (for processing)
  const bytes = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(uploadDir, file.name);
  fs.writeFileSync(filePath, bytes);
  console.log(filePath);
  return filePath;
}
