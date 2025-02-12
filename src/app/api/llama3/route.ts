import { NextResponse } from 'next/server';
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Create a prediction using the Llama 3 model.
    const prediction = await replicate.predictions.create({
      model: "meta/llama-2-70b-chat",
      input: { prompt },
    });

    // Poll the prediction status until it’s done.
    let updatedPrediction = prediction;
    while (updatedPrediction.status !== "succeeded" && updatedPrediction.status !== "failed") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      updatedPrediction = await replicate.predictions.get(prediction.id);
    }

    if (updatedPrediction.status === "succeeded") {
      return NextResponse.json({ result: updatedPrediction.output});
    } else {
      return NextResponse.json({ error: "Prediction failed" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error calling Replicate API:", error);
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