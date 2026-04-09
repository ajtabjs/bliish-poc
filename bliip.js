import axios from 'axios';
import 'dotenv/config'; /* load dotenv */

var user = process.env.user;

var token = process.env.token;
var token2 = process.env.token2; /* second token part lol bliish changed their api */

var time = 300000
const bliip = `https://bliish.com/api/v1/bliips`

var bliipuser = "top";
var push = {"handle": `${bliipuser}`}


function bliips() {
    axios.post(bliip, push, {
        headers: {
          'cookie': 'sb-prkqirdzadljdpkrvjvz-auth-token.0=' + token + '; sb-prkqirdzadljdpkrvjvz-auth-token.1=' + token2,
          'origin': 'https://bliish.com'
        }
      })
      .then(response => {
        console.log('cool status', response.status);
        console.log('data we be sendin', response.data);
        console.log("user bliiped:", bliipuser);
      }
     )
}

bliips(bliipuser);
