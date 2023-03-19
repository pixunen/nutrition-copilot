import { NextResponse } from 'next/server';

export async function GET() {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: 'user', content: 'Hello world!' }
    ]
  });
  const respond = completion.data.choices[0];
  return NextResponse.json({respond});
}