interface chatGPTRespond {
  respond: {
    message: {
      role: string,
      content: string
    },
    finish_reason: string,
    index: number
  },
}

async function getData(question: string) {
  const res = await fetch(`http://localhost:3000/api/chat-gpt/?question=${question}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}

export default async function Home() {
  const question = "Hello";
  const data: chatGPTRespond = await getData(question);

  return (
    <>
      <h1>This is chatGPT demo</h1><div>
        <form action="http://localhost:3000/api/chat-gpt/" method="GET">
          <label htmlFor="name">Question:</label>
          <input type="text" id="name" name="question" required />
          <button type="submit">Submit</button>
        </form>
        <p>{data.respond.message.content}</p>
      </div>
    </>
  )
}
