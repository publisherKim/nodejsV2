const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI',
    json: true
}, (err, res, body) => {
    console.log(`address: ${JSON.stringify(body.results[0].formatted_address)}`);
});