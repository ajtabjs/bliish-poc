import axios from 'axios';
const https = require('https');

var user = "snapple"

const globalposts = "https://bliish.com/api/v1/posts"

const wallposts = `https://bliish.com/api/v1/profiles/${user}/wall/posts`

axios.post(globalposts, payload)
.then(response => {
console.log('cool status', response.status);
console.log('data we be sendin', response.data);
})
