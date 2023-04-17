"use client";

export default function Result(result: GPTDay) {
    return (
        <div>
            <li>
                {result.breakfest.food}
            </li>
            <li>
                {result.lunch.food}
            </li>
            <li>
                {result.dinner.food}
            </li>
            <li>
                {result.snack.food}
            </li>
        </div>

    );
}