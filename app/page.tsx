export default async function Home() {
  return (
    <>
      <div>
        <form action="/result" method="GET">
          <label htmlFor="name">Question:</label>
          <input type="text" id="name" name="question" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
