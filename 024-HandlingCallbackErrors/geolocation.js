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

const encodeAddress = encodeURIComponent(argv.supul);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI`,
    json: true
}, (err, res, body) => {
    if (err) {
        console.log(`This site can't be reached`);
    } else if (body.status === 'ZERO_RESULTS') {
        console.log(`There is no address maching your input`);
    } else if (body.status === 'ok') {
        console.log(`address: ${JSON.stringify(body.results[0].formatted_address)}`);
        console.log(`lat: ${JSON.stringify(body.results[0].geometry.location.lat)}`);
        console.log(`lng: ${JSON.stringify(body.results[0].geometry.location.lng)}`);
    }
});