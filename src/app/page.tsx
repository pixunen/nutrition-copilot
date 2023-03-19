async function handleClick() {
  const response = await fetch('http://localhost:3000/api/chat-gpt');
  return response;
}
export default async function Home() {
  const data = await handleClick();
  const test = data.json();
  console.log(test)

  return (
    <>
      <h1>This is chatGPT demo</h1><div>
        <p></p>
      </div>
    </>
  )
}
