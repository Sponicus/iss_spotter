const request = require('request')
const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json' , (error, JSON, response) => {
    // console.log('error', error);
    // console.log('statusCode:', response && response);
    console.log('JSON', JSON.body);
  });
  //use request to fetch IP address from JSON API
};

request('https://api.ipify.org/?format=json' , (error, JSON, response) => {
    // console.log('error', error);
    // console.log('statusCode:', response && response);
    console.log('JSON', JSON.body);
  });
// console.log(fetchMyIP);
module.exports = {fetchMyIP};