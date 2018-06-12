const request = require('request');
const yargs = require('yargs');

const geocode = (address) => {
    console.log('address: ', address)
    const encodeAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI`,
        json: true
    }, (err, res, body) => {
        let message = ``;
        if (err) {
            message = `This site can't be reached`;
        } else if (body.status === 'ZERO_RESULTS') {
            message = `There is no address maching your input`;
        } else if (body.status === 'OK') {
            let geoResults = {};
            geoResults.address = body.results[0].formatted_address;
            geoResults.lat = body.results[0].geometry.location.lat;
            geoResults.lng = body.results[0].geometry.location.lng;
            console.log('geoResults :', geoResults);
            return geoResults;
        }
    });
};

module.exports.geocode = geocode;