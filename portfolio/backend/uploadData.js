import { initPinecone } from "./pineconeClient.js";
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function uploadData() {
  const index = await initPinecone();
  console.log("✅ Pinecone initialized!");

  const data = JSON.parse(fs.readFileSync("data/data.json", "utf8"));

  for (const item of data) {
    // Generate embeddings for each question
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: item.question,
    });

    const embedding = response.data[0].embedding;

    // Store in Pinecone
    await index.upsert([
      {
        id: item.question,
        values: embedding,
        metadata: { answer: item.answer },
      },
    ]);
  }

  console.log("✅ Data uploaded to Pinecone successfully!");
}

uploadData();
