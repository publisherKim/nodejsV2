const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600%20Amphitheatre%20Parkway%20Mountain%20View,%20CA&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI',
    json: true
}, (err, res, body) => {
    console.log(res);
    console.log('google address: ', body.results[0].formatted_address);
    console.log(`위도: ${body.results[0].geometry.location.lat}, 경도: ${body.results[0].geometry.location.lng}`);
});