/* tslint:disable:no-console */
const Facebook = require('facebook-node-sdk');
require('dotenv').config();
const { IgApiClient } =  require('instagram-private-api');
const { get } = require('request-promise'); // request is already declared as a dependency of the library
const { generateImage, generatePrompt } = require('./image_generation');


(async () => {

  const prompt = await generatePrompt("Generate a prompt for an AI-generated image of a beautiful natural occurance in the world including an animal or many animals. Make sure it is a different random occurance every time I ask you again. Here are 2 examples of prompts that could be generated: 1. A pack of exotic sharks, swimming together in the deep blue sea. 2. A bee polinating a plant, about to be eaten by a bear.");
  console.log(prompt);
  const imageUrl = await generateImage(prompt);
  console.log(imageUrl);
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.INSTAGRAM_USERNAME);
  const auth = await ig.account.login(process.env.INSTAGRAM_USERNAME, process.env.INSTAGRAM_PASSWORD);
  console.log(JSON.stringify(auth));


  // getting random square image from internet as a Buffer
  //const imageBuffer = await get({
    //url: imageUrl, // random picture with 800x800 size
    //encoding: null, // this is required, only this way a Buffer is returned
  //});

  console.log(imageUrl);
  const publishResult = await ig.publish.photo({
    file: imageUrl, // image buffer, you also can specify image from your disk using fs
    caption: prompt, // nice caption (optional)
  });

  console.log(publishResult); // publishResult.status should be "ok"
})();