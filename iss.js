const request = require('request')
const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json' , (error, body, response) => {
    console.log('error', error);
    console.log('statusCode:', response && response);
    console.log('body', body);
  });
  //use request to fetch IP address from JSON API
};

module.exports = {fetchMyIP};