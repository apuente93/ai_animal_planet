const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

// Create a new OpenAI configuration
const config = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
});

// Create a new OpenAI API client
const openai = new OpenAIApi(config);

async function generatePrompt() {
    const response = await openai.createCompletion({
        prompt: "Generate a prompt for an AI-generated image of a beautiful natural occurance in the world including an animal or many animals. Make sure it is a different random occurance every time I ask you again. Here are 2 examples of prompts that could be generated: 1. A pack of exotic sharks, swimming together in the deep blue sea. 2. A bee polinating a plant, about to be eaten by a bear.",//'Generate a prompt for an AI-generated image of a famous person, doing something funny. Make sure the prompt output is a complete sentence that makes sense. You must generate a random famous person and a random action every prompt.',
        model: "text-davinci-003"
    });
    console.log(response.data.choices[0].text);

    return response.data.choices[0].text;
}

async function generateImage() {
    const response = await openai.createImage({
        prompt: await generatePrompt(),
        n: 1,
        size: "1024x1024",
    });
    console.log(response.data.data[0].url);
}
generateImage();