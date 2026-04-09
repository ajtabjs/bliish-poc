import axios from 'axios';
const https = require('https');
require('dotenv').config(); // load dot env

var user = process.env.user;

var token = process.env.token;

var time = 3600000

const globalposts = "https://bliish.com/api/v1/posts"

const wallposts = `https://bliish.com/api/v1/profiles/${user}/wall/posts`

 const facts = [
    "test1",
"test2"
    ];

    const random = facts[Math.floor(Math.random() * facts.length)];
    
    var push = {"body": "${random}"}

axios.post(globalposts, push, {
  headers: {
    'Authorization': 'sb-prkqirdzadljdpkrvjvz-auth-token=' + token
  }
})
.then(response => {
console.log('cool status', response.status);
console.log('data we be sendin', response.data);
}), setInterval(() => {
    
}, time);
