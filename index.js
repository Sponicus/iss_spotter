const {fetchMyIP} = require('./iss');
const {fetchCoordsByIP} = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didn\'t work!', error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
});

// fetchCoordsByIP('90.250.90.161', (error, data) =>{
//   // console.log(error);
//   console.log(data);
// });


///////////////// dont understand implementation /////////////
const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});