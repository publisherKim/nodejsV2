const fs = require('fs');
const os = require('os');

const user = os.userInfo();
console.log(user);

fs.appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    // ES6, template literal
    console.log(`The "data to append" was appended to file! ${user.username}`);
});