const json =  require('./json-exercies/json');
const yargs = require('yargs');

const arg1 = yargs.argv._[0];
const arg2 = yargs.argv.name;
const arg3 = yargs.argv.tel;

if (arg1 === 'add') {
    json.addZsl(arg2, arg3);
} else if(arg1 === 'remove') {
    const result = json.removeZsl(arg2);
    const message = result ? `${arg2} was not found zsl`: `${arg2} was removed`;
    console.log(message);
} else if (arg1 === 'get') {
    const result = json.getZsl(arg2);
    console.log(result[0]);
} else {
    console.log(`I don't know what u have input`);
}