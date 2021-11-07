const request = require('request');
const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json' , (error, response, json) => {
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
      // console.log(json)
      callback(null, JSON.parse(json).ip); // .IP so only ouput IP isntead of object
    } catch (error) {
      callback(new Error('invalid JSON'));
    }
  });
};
//////////////////////////IP ADDRESS FUNCTION DOESNT MATTER BECAUSE API IS SET TO A SPECIFIC ADDRESS//////////////////////////

const fetchCoordsByIP = (data, callback) => {
  // const ipAddress = "8.8.8.8"
  // const apiKey = 'a6ce4f10-3f36-11ec-9952-35cfeaa50a39'
  request(`https://freegeoip.app/json/${data}`, (error, response, body) => {
    const {latitude, longitude} = JSON.parse(body);
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, {latitude, longitude});

  });
};

//// could not implement on my own ////
const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};




module.exports = {fetchMyIP,fetchCoordsByIP};
