const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600%20Amphitheatre%20Parkway%20Mountain%20View,%20CA',
    json: true
}, (err, res, body) => {
    console.log(body);
});