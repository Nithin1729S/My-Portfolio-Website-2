import { NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_TOKEN;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

interface RequestBody {
  prompt: string;
}

interface GeminiCandidateContent {
  parts: { text: string }[];
  role: string;
}

interface GeminiCandidate {
  content: GeminiCandidateContent;
  finishReason: string;
  avgLogprobs: number;
}

interface GeminiResponse {
  candidates?: GeminiCandidate[];
  error?: {
    message: string;
  };
  usageMetadata?: {
    promptTokenCount: number;
    candidatesTokenCount: number;
    totalTokenCount: number;
    promptTokensDetails?: any[];
    candidatesTokensDetails?: any[];
  };
  modelVersion?: string;
}

export async function POST(request: Request) {
  try {
    const { prompt }: RequestBody = await request.json();
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const payload = {
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ]
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Read the response body only once
    const rawText = await response.text();
    console.log("Raw response text:", rawText);

    // Parse the raw text into JSON
    const data: GeminiResponse = JSON.parse(rawText);

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "Prediction failed" },
        { status: response.status }
      );
    }

    // Extract the generated text from the response structure.
    // The Gemini API returns the generated text under candidates[0].content.parts[0].text.
    const result =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error calling Google Gemini API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Handle preflight OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*", // Adjust for production
    },
  });
}
