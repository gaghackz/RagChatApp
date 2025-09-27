interface ChunkingOptions {
  chunkSize?: number;
  sentenceOverlap?: number;
}

export function chunkTextBySentence(
  text: string,
  options: ChunkingOptions = {}
): string[] {
  // Set default values for options if they aren't provided
  const { chunkSize = 1500, sentenceOverlap = 3 } = options;

  if (!text) {
    return [];
  }

  const cleanedText = text.replace(/[\n\t\s]+/g, " ").trim();

  const sentences = cleanedText.match(/[^.!?]+[.!?]+(\s|$)/g);

  if (!sentences || sentences.length === 0) {
    // If we can't split by sentence, return the whole text if it's smaller than chunkSize
    return cleanedText.length <= chunkSize ? [cleanedText] : [];
  }

  const finalChunks: string[] = [];
  let currentChunkSentences: string[] = [];

  // 3. Group sentences into chunks
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    const currentChunkText = currentChunkSentences.join("");

    // Check if adding the next sentence would exceed the chunk size
    if (
      currentChunkText.length + sentence.length > chunkSize &&
      currentChunkSentences.length > 0
    ) {
      // Finalize the current chunk
      finalChunks.push(currentChunkText.trim());

      // Start the next chunk with an overlap of the last few sentences
      const overlapStartIndex = Math.max(
        0,
        currentChunkSentences.length - sentenceOverlap
      );
      currentChunkSentences = currentChunkSentences.slice(overlapStartIndex);
    }

    // Add the current sentence to the chunk
    currentChunkSentences.push(sentence);
  }

  // 4. Add the final remaining chunk
  if (currentChunkSentences.length > 0) {
    finalChunks.push(currentChunkSentences.join("").trim());
  }

  return finalChunks;
}
