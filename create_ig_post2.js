/* tslint:disable:no-console */
const Facebook = require('facebook-node-sdk');
require('dotenv').config();
const { IgApiClient } =  require('instagram-private-api');
const { get } = require('request-promise'); // request is already declared as a dependency of the library
const { generateImage, generatePrompt } = require('./image_generation');


(async () => {

  console.log("ai_animal_planet");
  const prompt = await generatePrompt("Generate a random prompt of a natural occurance in the world including an animal or many animals. Here are 2 examples of prompts that could be generated: 1. A pack of exotic sharks, swimming in the deep blue ocean. 2. A group of snakes ready to attack a mouse nest. Please only generate one sentence (don't include the number) without punctuations and add atleast 10 instagram hashtags at the end, that are engaging and are known to attract many visitors and likes. Make sure the animal in your sentence is selected randomly from over 1 million distinct animals. Also make sure the natural occurence you select is randomized from 10 million natural occurances. Also, do not use flamingos, birds, zebras, elephants, horses or lions as the animals. Use different animals.");
  console.log(prompt);
  const imageUrl = await generateImage(prompt);
  console.log(imageUrl);
  const ig = new IgApiClient();
  ig.state.generateDevice("ai_animal_planet");
  const auth = await ig.account.login("ai_animal_planet", "The7wonders!!");
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