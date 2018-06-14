// 불러오기
const crud = require('./json-exercies/crud');
const util = require('./util/util');
const business = require('./program/business');

// use code
const accountList = crud.fetchList();
console.log(util.getUser('Alice', accountList));
console.log(util.getUser('Wang', accountList));

business.currentExchange('USD', 'CNY', 10)
    .then((result) => {
        // 아 그냥 여기서 다음 수행할 것들을 처리하면 되는거구나...
        // is ok!
        console.log(result);
    });
