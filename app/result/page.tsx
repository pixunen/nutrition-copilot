import Loading from "./loading";
import { Suspense } from 'react';
import fetch from 'node-fetch';
import Result from "./result";

async function getData(question: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/chat-gpt/?question=${question}`);
        return await res.json() as GPTRespond;
    } catch (error: any) {
        console.log(error);
    }
}

function isJSONString(str: string | undefined): Boolean | GPTContent {
    try {
        return str ? JSON.parse(str) : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default async function ResultHome({ searchParams }: { searchParams: { [key: string]: string } }) {
    const data: GPTRespond | undefined = await getData(searchParams.question)
    const respondContent = data?.respond.message.content
    const parsedObj = isJSONString(respondContent);
    if (parsedObj) {
        const content = parsedObj as GPTContent;
        return (
            <div>
                <Suspense fallback={<Loading />}>
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24 min-h-screen">
                        <h1 className="text-xl font-bold">Your nutrition plan:</h1>
                        <ul>
                            {content.week.days.map((day) => (
                                <Result key={day.name} {...day.gptDay} />
                            ))}
                        </ul>
                    </div>
                </Suspense>
            </div>
        )
    }
}