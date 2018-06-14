const crud = require('./json-exercies/crud');
const util = require('./util/util');
const accountList = crud.fetchList();


console.log(util.getUser('Alice', accountList));
console.log(util.getUser('Wang', accountList));