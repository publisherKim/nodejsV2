const request = require('request');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const geocode = (address) => {
    return new Promise((resolve, reject) => {
        const encodeAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI`,
            json: true
        }, (err, res, body) => {
            if (err) {
                reject(`This site can't be reached`);
            } else if (body.status === 'ZERO_RESULTS') {
                reject(`There is no address maching your input`);
            } else if (body.status === 'OK') {
                let geoResults = {};
                geoResults.address = body.results[0].formatted_address;
                geoResults.lat = body.results[0].geometry.location.lat;
                geoResults.lng = body.results[0].geometry.location.lng;

                resolve(geoResults);
            }
        });
    });
};

geocode('Dobong Seoul').then((geoResults) => {
    // resolve
    return getWeather(geoResults.lat, geoResults.lng);
}).then((time) => {
    console.log(time);
}).catch((e) => {
    console.log(e);
});

const getWeather = (lat, lng) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/662b496c0200b8e1228a05ef75355828/${lat},${lng}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                reject(`This site can't be reached`);
            } else if (body.status === 'ZERO_RESULTS') {
                reject(`There is no region matching your input`);
            } else {
                resolve(body.currently.time);
            }
        });
    });
};