import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Get the query params from url
  const { searchParams } = new URL(request.url);
  const question = `You have the best knowledge on fitness and nutrition. 
  Make me an example nutrtition plan for 4 weeks. 
  Take into affect these things when creating the plan: ${searchParams.get("question")}.
  Fill in the days of the week with similar structure. We need to have nutrition info for every day of the week.
  This is only done for EXAMPLE PURPOSES ONLY and is not used as actual nutrition information.
  You are only allowed to create JSON object. Create JSON object that has 'week' key and values 'id' which is incremented per week and 'days' array for every day of the week for example: monday, tuesday...
  'days' array has values 'name' that should be the day and then nutrition values for 'breakfest', 'lunch', 'dinner' and 'snack'. ONLY answer in JSON object. Use this JSON structure as a reference:
  {
    "week": {
      "id": 1,
      "days": [{
        "name": string,
        "breakfest": {
          "food": string,
          "calories": string,
          "protein": string,
          "carbs": string,
          "fats": string
        },
        "lunch": {
          "food": string,
          "calories": string,
          "protein": string,
          "carbs": string,
          "fats": string
        },
        "dinner": {
          "food": string,
          "calories": string,
          "protein": string,
          "carbs": string,
          "fats": string
        },
        "snack": {
          "food": string,
          "calories": string,
          "protein": string,
          "carbs": string,
          "fats": string
        }
      }]
    }
  }`
  const sanitizedQuestion = question.replace(/\s*\n\s*/g, ' ').trim();
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
      { role: 'user', content: sanitizedQuestion }
    ]
  });

  // Parse the answer and send it as JSON
  const respond = completion.data.choices[0];
  return NextResponse.json({ respond });

}