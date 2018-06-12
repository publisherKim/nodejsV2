const weather = require('./weather');
const yargs = require('yargs');
const argv = yargs
    .command('weather', 'Read a Weather')
    .help()
    .argv;

const arg1 = yargs.argv._[0];

if (arg1 === 'weather') {
    weather.weather();
} else {
    console.log(`I don't know what u have input`);
}