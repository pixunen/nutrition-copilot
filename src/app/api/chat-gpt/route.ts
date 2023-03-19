import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const respond = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
  });
  const data = await respond.json();
  return NextResponse.json({ data })
}