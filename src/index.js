const fetch = require('isomorphic-fetch');

module.exports = function(token) {
  return fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`)
  .then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(details) {
		return details;
	});
}
