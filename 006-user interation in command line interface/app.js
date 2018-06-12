const calc = require('./calc');
const _ = require('lodash');

// console.log(process.argv);

const arg1 = process.argv[0];
const arg2 = process.argv[1];
const arg3 = process.argv[2];
const arg4 = process.argv[3]*1;
const arg5 = process.argv[4]*1;

// console.log(arg1, arg2, arg3, arg4, arg5);
// console.log(calc.add(arg4*1, arg5*1));
// argv 는 string 값이다. 숫자의 경우 변환 해주어야 한다.

// command line 처리하는 메커니즘
if (arg3 === 'add') {
    const result = calc.add(arg4, arg5);
    console.log(result);
} else if(arg3 === 'substract') {
    const result = calc.sub(arg4, arg5);
    console.log(result);
} else if(arg3 === 'multiply') {
    const result = calc.mul(arg4, arg5);
    console.log(result);
} else if(arg3 === 'division') {
    const result = calc.div(arg4, arg5);
    console.log(result);
} else {
    console.log(`I don't understand what you have input`);
}