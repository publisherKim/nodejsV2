const request = require('request');
const yargs = require('yargs');
const argv = yargs
    .options({
        // supul: Spaceweb(특정 지역을 관활하는 서버) = Openhash blockchain
        supul: {
            demand: true,
            alias: 's',
            describe: `Get information about the area user requested.`,
            string: true
        }
    })
    .help()
    .argv;

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
            message = `address: ${JSON.stringify(body.results[0].formatted_address)}
            lat: ${JSON.stringify(body.results[0].geometry.location.lat)}
            lng: ${JSON.stringify(body.results[0].geometry.location.lng)}`;
        }
        console.log('message :', message);
    });
};

module.exports.geocode = geocode;