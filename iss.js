const request = require('request');
const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json' , (error, json, response) => {
    if (error) {
      callback(error);
      return;
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${json}`;
      callback(Error(msg), null);
      return;
    }

    try {
      callback(null, JSON.parse(json.body).ip); // .IP so only ouput IP isntead of object
    } catch (error) {
      callback(new Error('invalid JSON'));
    }
  });
};

module.exports = {fetchMyIP};