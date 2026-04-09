import axios from 'axios';
const https = require('https');
require('dotenv').config(); // load dot env

var user = "snapple"

var time = 

const globalposts = "https://bliish.com/api/v1/posts"

const wallposts = `https://bliish.com/api/v1/profiles/${user}/wall/posts`

 const facts = [
    "test1",
"test2"
    ];

    const random = quotes[Math.floor(Math.random() * quotes.length)];

axios.post(globalposts, payload)
.then(response => {
console.log('cool status', response.status);
console.log('data we be sendin', response.data);
}), setInterval(() => {
    
}, time);
