# google-oauth2-token-info


## Installation

The library is distributed on `npm`. In order to add it as a dependency,
run the following command:

~~~~ sh
$ npm install google-oauth2-token-info --save
~~~~

## Usage

~~~~ js
var tokenInfo = require('google-oauth2-token-info');

const token = '123abc...' // example token

tokenInfo(token)
    .then(data => {
      console.log(data);
    });
~~~~


#### Response for a valid token
~~~~ js
{
  azp: "xxxxxxxxxxx",
  aud: "xxxxxxxxxxx",
  sub: "xxxxxxxxxxx",
  hd: "xxxxxxxxxxx",
  email: "xxxxxxxxxxx","xxxxxxxxxxx",
  email_verified: "xxxxxxxxxxx",
  at_hash: "xxxxxxxxxxx",
  iss: "xxxxxxxxxxx",
  iat: "xxxxxxxxxxx",
  exp: "xxxxxxxxxxx",
  name: "xxxxxxxxxxx",
  picture: "xxxxxxxxxxx",
  given_name: "xxxxxxxxxxx",
  family_name: "xxxxxxxxxxx",
  locale: "xxxxxxxxxxx",
  alg: "xxxxxxxxxxx",
  kid: "xxxxxxxxxxx"
}
~~~~
