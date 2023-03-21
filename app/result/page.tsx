import Loading from "./loading";
import { Suspense } from 'react';

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

export default async function ResultHome({ searchParams }: { searchParams: { [key: string]: string } }) {
    const data: chatGPTRespond = await getData(searchParams?.question)
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <div>
                    <p>{data.respond.message.content}</p>
                </div>
            </Suspense>
        </div>
    )
}