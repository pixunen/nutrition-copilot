interface chatGPTRespond {
    respond: {
        message: {
            role: string,
            content: string // string | chatGPTContent
        },
        finish_reason: string,
        index: number
    },
}