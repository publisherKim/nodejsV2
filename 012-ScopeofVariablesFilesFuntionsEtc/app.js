const json =  require('./json-exercies/json');
const yargs = require('yargs');

const arg1 = yargs.argv._[0];
const arg2 = yargs.argv.name;
const arg3 = yargs.argv.tel;

// console.log(yargs.argv);
// console.log(arg1);
// console.log(arg2);
// console.log(arg3);

if(arg1 === 'addZsl') {
    json.addZsl(arg2, arg3);
} else {
    console.log(`I don't know what u have input`);
}