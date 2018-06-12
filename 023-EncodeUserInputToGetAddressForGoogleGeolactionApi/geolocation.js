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
    
const encodeAddress = encodeURIComponent(argv.l).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
console.log('encodeAddress:', encodeAddress);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyB9O1f7y7Qzm3k5P6-4fNIMpeaQED827WI`,
    json: true
}, (err, res, body) => {
    console.log(`address: ${JSON.stringify(body.results[0].formatted_address)}`);
});