// const {fetchMyIP} = require('./iss_promised');
// const {fetchCoordsByIP} = require('./iss_promised');
// const {fetchISSFlyOverTimes} = require('./iss_promised');

// fetchMyIP()
//   .then(body => console.log(body));

//   fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(body => console.log(body));

//   fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    // printPassTimes(passTimes);   compass has this but returns error cannot find function printPassTimes(passTimes);
    console.log(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });