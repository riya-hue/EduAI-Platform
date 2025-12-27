const OpenAI = require('openai');

let client;
if (process.env.OPENAI_API_KEY) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

async function getSupportResponse(question) {
    if (client) {
        const completion = await client.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: question }]
        });
        return completion.choices[0].message.content;
    } else {
        return `Here’s a helpful answer for your question: "${question}"`;
    }
}

module.exports = { getSupportResponse };
