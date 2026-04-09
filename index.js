import axios from 'axios';
import 'dotenv/config'; /* load dotenv */

var user = process.env.user;

var token = process.env.token;
var token2 = process.env.token2; /* second token part lol bliish changed their api */

var time = 300000

const globalposts = "https://bliish.com/api/v1/posts"

const wallposts = `https://bliish.com/api/v1/profiles/${user}/wall/posts`

const wall = "https://bliish.com/api/v1/profiles/snapple/wall?fresh=1&limit=20"

 const facts = [
    "Snapple Real Fact #408: Panda bears eat up to 16 hours a day.",
"Snapple Real Fact #2143: The first golf course in America was built in 1884 in West Virginia.",
"Snapple Real Fact #123: The average person spends about six months of their life waiting for red lights to turn green.",
"Snapple Real Fact #567: The world's largest snowflake on record was 15 inches wide and 8 inches thick.",
"Snapple Real Fact #789: The shortest war in history lasted only 38 minutes between Britain and Zanzibar in 1896.",
"Snapple Real Fact #321: The average person has about 100,000 hairs on their head.",
"Snapple Real Fact #654: The longest recorded flight of a chicken is 13 seconds.",
"Snapple Real Fact #987: The human nose can remember 50,000 different scents.",
"Snapple Real Fact #432: The world's largest rubber band ball weighs over 9,000 pounds.",
`Snapple Real Fact #2145: The name April comes from the Latin word "aperire" which means "to open", since April is the month trees and flowers begin to bloom.`,
`Snapple Real Fact #1334: Nowhere in the Humpty Dumpty Nursery Rhyme does it say that Humpty Dumpty is an egg.`,
"Snapple Real Fact #2138: The first St. Patrick's Day Parade was held in Florida over 400 years ago in March of 1601.",
"Snapple Real Fact #1925: Saint Lucia is the only country in the world named after a woman.",
"Snapple Real Fact #5678: The world's largest snowflake on record was 15 inches wide and 8 inches thick.",
"Snapple Real Fact #4321: The average person has about 100,000 hairs on their head.",
"Snapple Real Fact #8765: The longest recorded flight of a chicken is 13 seconds.",
"Snapple Real Fact #5432: The human nose can remember 50,000 different scents.",
"Snapple Real Fact #6789: The world's largest rubber band ball weighs over 9,000 pounds.",
"Snapple Real Fact #6: A honey bee can fly at 15 miles per hour."
    ];

    const random = facts[Math.floor(Math.random() * facts.length)];
    
    var push = {"body": `${random}`}

    function check(){
axios.get(wall, {
    headers: {
      'cookie': 'sb-prkqirdzadljdpkrvjvz-auth-token.0=' + token + '; sb-prkqirdzadljdpkrvjvz-auth-token.1=' + token2,
      'origin': 'https://bliish.com'
    }
  })
  .then(response => {
    data = response.data.posts[0].created_at;
    var posttime = new Date(data).getTime();

    if (data > posttime - time) {
      console.log("post is less than an hour, not posting new fact :(");
      return false;
    }
    console.log('we be ballin, ready to post')
    return true;
    console.log('cool status', response.status);
    console.log('data we be recieiving', response.data);
  })}


function dailyPost(){
  axios.post(globalposts, push, {
  headers: {
    'cookie': 'sb-prkqirdzadljdpkrvjvz-auth-token.0=' + token + '; sb-prkqirdzadljdpkrvjvz-auth-token.1=' + token2,
    'origin': 'https://bliish.com'
  }})
.then(response => {
console.log('cool status', response.status);
console.log('data we be sendin', response.data);
console.log('random fact is', random);
})
}

function tryPost() {
  check().then(testpost => {
    if (testpost) dailyPost();
  });
}
