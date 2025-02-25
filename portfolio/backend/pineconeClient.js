import 'dotenv/config';
import { Pinecone } from "@pinecone-database/pinecone";

let pinecone;

export async function initPinecone() {
  pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  console.log("✅ Pinecone initialized");

  return pinecone.index(process.env.PINECONE_INDEX_NAME);
}
