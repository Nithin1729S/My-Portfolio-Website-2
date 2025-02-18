import { NextResponse } from 'next/server';
import { createClient } from 'redis';

const redis = createClient({
  url: process.env.REDIS_URL, 
});

(async () => {
  await redis.connect();
})().catch(); // Ensure proper error handling

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
    // --- Rate Limit Logic with Redis ---
    // Check if the global counter exists; if not, initialize it with a TTL of 24 hours (86400 seconds)
    let count = await redis.get('global_count');
    if (count === null) {
      await redis.set('global_count', '0', { EX: 86400 });
      count = '0';
    }

    // Atomically increment the counter
    const newCount = await redis.incr('global_count');
    //console.log('Global count after increment:', newCount);

    // If the incremented counter exceeds 10, deny the request
    if (newCount > 10) {
      return NextResponse.json(
        { error: "Whoa, you've chatted a lot today! Let's take a break and try again tomorrow." },
        { status: 429 }
      );
    }
    // --- End Rate Limit Logic ---

    // Process the incoming request
    const { prompt }: RequestBody = await request.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "Hmm, it looks like you haven't typed a message. Could you please say something?"  },
        { status: 400 }
      );
    }

    const payload = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    };

    // Call the Gemini API
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Read the response body only once
    const rawText = await response.text();
    //console.log("Raw response text:", rawText);

    // Parse the raw text into JSON
    const data: GeminiResponse = JSON.parse(rawText);

    if (!response.ok) {
      return NextResponse.json(
        { error: "I'm a bit occupied. Please try again later." },
        { status: response.status }
      );
    }

    // Extract the generated text from the response structure.
    const result =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't you. Could you try rephrasing your question?";

    return NextResponse.json({ result });
  } catch (error) {
    //console.error("Error calling Google Gemini API:", error);
    return NextResponse.json(
      { error: "Oh no, something went wrong on my end. Please try again in a bit."  },
      { status: 500 }
    );
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
