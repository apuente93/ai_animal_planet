const Facebook = require('facebook-node-sdk');
require('dotenv').config();

const facebook = new Facebook({
    appId: process.env.FACEBOOK_ID,
    secret: process.env.FACEBOOK_SECRET
});

/*
facebook.api('/10167233336530707/accounts?access_token=EAAH3lJRepkQBAHTyqGSrgqKf4GL7uuprQClkCf7bhc23FZBWx9ZBE0YNH3fJ0rkm4waUZCKk56r7U1deDtZBnjQnDvA6IXZCnqlUfphONkFNtZAZCUg07EfyaInhfynNFZCr6cupRHVbEL9hMWRjgTghIXnp55BFSPzNCPLrQgfQ6SXyZBZCAAjaBVZC1NyM43mSegroLHiGBZAY2l0eXk3XjtZCA', (res) => {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
    console.log('Instagram ID: ' + res);
});
*/

facebook.api(`/17841456553385778/media`, 'POST', {
    caption: 'Peacocks',
    image_url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ys3ClCSRPTqgHq1xvRUulECW/user-cugpfcbMKkMSoCUvaIn0QpE8/img-seMaaQ6ei62q562aYEko9nnd.png?st=2023-01-15T01%3A47%3A17Z&se=2023-01-15T03%3A47%3A17Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-14T23%3A59%3A59Z&ske=2023-01-15T23%3A59%3A59Z&sks=b&skv=2021-08-06&sig=Dqey%2BHSLGx5XD3smBXvy2krY36sszudWbdI22QU%2BCdk%3D',
    access_token: process.env.FACEBOOK_ACCESS_TOKEN
}, (res) => {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
    console.log('Post Id: ' + res);
});

