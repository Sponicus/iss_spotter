const request = require('request')
const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json' , (error, json, response) => {
    if (error) {
      callback(error);
      return
    }
    try {
      callback(null, JSON.parse(json.body).ip); // .IP so only ouput IP isntead of object
    } catch (error) {
      callback(new Error('invalid JSON'));
    }
    // console.log('error', error);
    // console.log('statusCode:', response && response);
    // console.log('JSON', JSON.body);
    
  });
  //use request to fetch IP address from JSON API
};

// request('https://api.ipify.org/?format=json' , (error, JSON, response) => {
//     // console.log('error', error);
//     // console.log('statusCode:', response && response);
//     console.log('JSON', JSON.body);
// });
// console.log(fetchMyIP());
module.exports = {fetchMyIP}; 