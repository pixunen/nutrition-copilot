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

async function getData() {
  //https://jsonplaceholder.typicode.com/todos/1
  const res = await fetch('http://localhost:3000/api/chat-gpt/');
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return await res.json();
}

export default async function Home() {
  const data: chatGPTRespond = await getData();

  return (
    <>
      <h1>This is chatGPT demo</h1><div>
        <p>{data.respond.message.content}</p>
      </div>
    </>
  )
}
