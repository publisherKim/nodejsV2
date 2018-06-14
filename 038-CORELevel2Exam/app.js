// 불러오기
const crud = require('./json-exercies/crud');
const exchange = require('./program/exchange');
const util = require('./util/util');

// use code
const accountList = crud.fetchList('./json-exercies/data.json');

exchange.currentExchange('USD', 'CNY', 10)
    .then((exchangedAmount) => {
        const account = crud.getAll('./json-exercies/data.json');
        // account = [];
        const idOfBuyer = account.findIndex(item => item.name === util.name('Alice'));
        const idOfSeller = account.findIndex(item => item.name === util.name('Wang'));
        
        account[idOfBuyer].balance.amount += exchangedAmount;
        account[idOfSeller].balance.amount -= exchangedAmount;
        crud.updateList('./json-exercies/data.json', account);
    });
