import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { initPinecone } from './pineconeClient.js';
import OpenAI from 'openai';

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Initialize Pinecone
let pineconeIndex;

(async () => {
  pineconeIndex = await initPinecone();
  console.log("Pinecone index initialized");
})();

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    // Generate embedding for user input
    const response = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: message,
    });

    const queryEmbedding = response.data[0].embedding;

    // Search Pinecone for the best match
    const queryResponse = await pineconeIndex.query({
      vector: queryEmbedding,
      topK: 1,
      includeMetadata: true,
    });

    const bestMatch = queryResponse.matches[0]?.metadata?.answer || 
      "I couldn't find an answer for that. Can you ask another way?";

    // Use OpenAI to generate a chatbot response
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        { role: "system", content: "You are Annie's AI assistant, trained to answer questions about her portfolio." },
        { role: "user", content: `User asked: "${message}" \n\nBest match from database: "${bestMatch}"` }
      ],
    });

    res.json({ reply: chatResponse.choices[0].message.content });

  } catch (error) {
    console.error("Error in chatbot response:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
