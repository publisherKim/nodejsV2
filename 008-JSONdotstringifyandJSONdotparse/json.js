const fs = require('fs');

// Object 
const zsl1 = {
    // properties = key + value
    name: 'Uk',
    tel: 821012345678
};

const zsl1String = JSON.stringify(zsl1);
// console.log('zsl1: ', zsl1, 'type: ', typeof zsl1); // zsl1:  { name: 'Uk', tel: 821012345678 } type:  object
// console.log('zsl1String: ', zsl1String, 'type: ', typeof zsl1String); // zsl1String:  {"name":"Uk","tel":821012345678} type:  string

fs.writeFileSync('zsl1', zsl1String);

const readZsl = fs.readFileSync('./zsl1');
console.log('before parse: ', readZsl);

console.log('after parse: ', JSON.parse(readZsl));