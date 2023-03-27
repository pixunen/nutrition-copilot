import Loading from "./loading";
import { Suspense } from 'react';

async function getData(question: string) {
    try {
        const res = await fetch(`http://127.0.0.1:3000/api/chat-gpt/?question=${question}`, { cache: 'no-store' });
        return await res.json();
    } catch (error: any) {
        console.log(error);
    }
}

function isJSONString(str: string) {
    try {
        return JSON.parse(str);
    } catch (error) {
        return false;
    }
}

export default async function ResultHome({ searchParams }: { searchParams: { [key: string]: string } }) {
    const data: chatGPTRespond = await getData(searchParams?.question)
    const respondContent = data.respond.message.content
    var content: chatGPTContent | { unknown: string } = { unknown: "value" };
    const parsedObj = isJSONString(respondContent);
    if (parsedObj) {
        content = parsedObj as chatGPTContent;
        console.log(content);
    }
    
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <div className="p-8 md:p-12 lg:px-16 lg:py-24 min-h-screen">
                    <h1 className="text-xl font-bold">Your nutrition plan:</h1>
                    <p>{respondContent}</p>
                </div>
            </Suspense>
        </div>
    )
}