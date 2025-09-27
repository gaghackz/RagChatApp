import { GoogleGenAI } from "@google/genai";

// Define a clear interface for the function's output.
export interface EmbeddedChunk {
  chunk: string;
  embedding: number[];
}

export async function generateEmbeddings(
  textChunks: string[]
): Promise<EmbeddedChunk[]> {
  // Ensure the API key is available from environment variables.
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable not set.");
  }

  const genAI = new GoogleGenAI({ apiKey });

  const allEmbeddedChunks: EmbeddedChunk[] = [];
  const batchSize = 100; // The API can handle up to 100 documents per call.

  for (let i = 0; i < textChunks.length; i += batchSize) {
    const batch = textChunks.slice(i, i + batchSize);

    try {
      // CORRECTED: Calling embedContent directly on genAI.models and passing the model name.
      const result = await genAI.models.embedContent({
        model: "gemini-embedding-001",
        contents: batch,
        config: { taskType: "RETRIEVAL_DOCUMENT" },
      });

      const embeddings = result.embeddings!;

      // Map the batch of texts to their corresponding embeddings.
      batch.forEach((chunk, index) => {
        const embedding = embeddings[index]?.values;
        if (embedding) {
          allEmbeddedChunks.push({
            chunk,
            embedding,
          });
        }
      });
    } catch (error) {
      console.error("Error generating embeddings for a batch:", error);
      // Decide if you want to stop or continue. For now, we'll stop.
      throw new Error(
        "Failed to generate embeddings. See console for details."
      );
    }
  }

  return allEmbeddedChunks;
}
