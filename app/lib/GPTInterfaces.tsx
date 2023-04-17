interface GPTRespond {
    respond: {
        message: {
            role: string,
            content: string // string | chatGPTContent
        },
        finish_reason: string,
        index: number
    },
}

interface GPTContent {
    week: {
        id: number,
        days: [{
            name: string,
            gptDay: GPTDay
        }]
    }
}

interface GPTDay {
    breakfest: {
        food: string,
        calories: string,
        protein: string,
        carbs: string,
        fats: string
    },
    lunch: {
        food: string,
        calories: string,
        protein: string,
        carbs: string,
        fats: string
    },
    dinner: {
        food: string,
        calories: string,
        protein: string,
        carbs: string,
        fats: string
    },
    snack: {
        food: string,
        calories: string,
        protein: string,
        carbs: string,
        fats: string
    }
}