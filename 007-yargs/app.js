const calc = require('./calc');
const yargs = require('yargs')

// 기본 제공 argv와 yargs의 차이점
console.log(process.argv);
console.log(yargs.argv);

// node app add 3 4
const arg1 = yargs.argv._[0];
const arg2 = yargs.argv._[1];
const arg3 = yargs.argv._[2];

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