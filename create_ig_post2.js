/* tslint:disable:no-console */
const Facebook = require('facebook-node-sdk');
require('dotenv').config();
const { IgApiClient } =  require('instagram-private-api');
const { get } = require('request-promise'); // request is already declared as a dependency of the library
const fs = require('fs');

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.INSTAGRAM_USERNAME);
  const auth = await ig.account.login(process.env.INSTAGRAM_USERNAME, process.env.INSTAGRAM_PASSWORD);
  console.log(JSON.stringify(auth));

  // read image from the same location as the script
  const imageBuffer = fs.readFileSync('./image.jpeg');

  const publishResult = await ig.publish.photo({
    file: imageBuffer, // image buffer, you also can specify image from your disk using fs
    caption: 'A flock of brightly-colored parrots perched atop a mountain', // nice caption (optional)
  });

  console.log(publishResult); // publishResult.status should be "ok"
})();