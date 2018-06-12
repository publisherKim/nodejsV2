const geolocation = require('./geolocation');
const weather = require('./weather');
const yargs = require('yargs');
const argv = yargs
    .command('geocode', 'Get data about the region user requested.', {
        name: {
            describe: 'Information on a specific region or area.',
            demand: true,
            alias: 'n'
        }
    })
    .command('weather', 'Read a Weather')
    .help()
    .argv;

const arg1 = yargs.argv._[0];

if (arg1 === 'geolocation') {
    geolocation.geocode(argv.supul, (errMessage, geoResults) => weather.getWeather(geoResults.lat, geoResults.lng, (errorMessage, time) => {
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(time);
        }
    }));
} else {
    console.log(`I don't know what u have input`);
}