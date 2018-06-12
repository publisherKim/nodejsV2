const calc = require('./calc');
const yargs = require('yargs')

console.log(yargs.argv);

// node app2  add --a=3 --b=4
const arg1 = yargs.argv._[0];
const arg2 = yargs.argv.a;
const arg3 = yargs.argv.b;

if (arg1 === 'add') {
    const result = calc.add(arg2, arg3);
    console.log(result);
} else if (arg1 === 'substract') {
    const result = calc.sub(arg2, arg3);
    console.log(result);
} else if (arg1 === 'multiply') {
    const result = calc.mul(arg2, arg3);
    console.log(result);
} else if (arg1 === 'division') {
    const result = calc.div(arg2, arg3);
    console.log(result);
} else {
    console.log(`I don't understand what you have input`);
}