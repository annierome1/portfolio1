import { initPinecone } from './pineconeClient.js';
import OpenAI from 'openai';
import fs from 'fs-extra';
import path from 'path';
import Tesseract from 'tesseract.js';
import { createRequire } from "module"; // ✅ Allows CommonJS imports in ES modules

const pdf2picModule = await import('pdf2pic');
const pdf2pic = pdf2picModule.default || pdf2picModule; // ✅ Use CommonJS module inside ESM

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function extractTextFromScannedPDF(filePath) {
  try {
    console.log("📄 Converting PDF pages to images...");

    // ✅ Setup output directory for images
    const outputDir = path.resolve("data/pdf-images");
    fs.ensureDirSync(outputDir);

    // ✅ Use pdf2pic correctly
    const converter = pdf2pic.default({
      density: 300,   // High resolution
      format: "png",  // Output format
      width: 1600,    // Adjust image width
      height: 2000    // Adjust image height
    });

    // ✅ Convert first page (adjust for more)
    const result = await converter.convertBulk(filePath, -1); // Convert all pages

    if (!result || result.length === 0) {
      throw new Error("❌ Failed to convert PDF to images.");
    }

    console.log("📸 Images extracted! Performing OCR...");

    let extractedText = "";

    // ✅ Perform OCR on each image
    for (const image of result) {
      const textResult = await Tesseract.recognize(
        image.path, // Image file path
        'eng',      // Language: English
        { logger: m => console.log(m) } // Logs OCR progress
      );

      extractedText += textResult.data.text.trim() + "\n";
    }

    return extractedText;
  } catch (error) {
    console.error("❌ OCR Extraction Failed:", error);
    return "";
  }
}

async function uploadResume() {
  try {
    const index = await initPinecone();
    console.log("✅ Pinecone initialized!");

    const resumePath = path.resolve('data/AnnieRomeRes.pdf');
    console.log(`📄 Loading resume from: ${resumePath}`);

    if (!fs.existsSync(resumePath)) {
      throw new Error(`❌ Resume file not found at: ${resumePath}`);
    }

    // ✅ Extract text using OCR
    const resumeText = await extractTextFromScannedPDF(resumePath);

    if (!resumeText) {
      throw new Error("❌ Failed to extract text from the scanned PDF.");
    }

    // ✅ Chunk text into 500-character pieces
    const chunks = resumeText.match(/(.|[\r\n]){1,500}/g) || [];

    for (const chunk of chunks) {
      const response = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: chunk,
      });

      const embedding = response.data[0].embedding;

      await index.upsert([
        {
          id: `resume-${chunks.indexOf(chunk)}`,
          values: embedding,
          metadata: { content: chunk },
        },
      ]);
    }

    console.log('✅ Resume uploaded to Pinecone successfully!');
  } catch (error) {
    console.error("❌ Error uploading resume:", error);
  }
}

uploadResume();
