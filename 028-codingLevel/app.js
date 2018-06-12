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
    const geoResults = geolocation.geocode(argv.supul);
    console.log(geoResults);    // undefined
    // weather.weather(geoResults.lat, geoResults.lng);
} else {
    console.log(`I don't know what u have input`);
}