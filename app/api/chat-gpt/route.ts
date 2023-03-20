import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Get the query params from url
  const { searchParams } = new URL(request.url);

  // Init the openAI client
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // Generate the chat completion
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: 'user', content: searchParams.get('question') }
    ]
  });

  // Parse the answer and send it as JSON
  const respond = completion.data.choices[0];
  return NextResponse.json({respond});
}