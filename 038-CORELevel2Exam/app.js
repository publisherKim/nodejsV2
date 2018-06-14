// 불러오기
const crud = require('./json-exercies/crud');
const exchange = require('./program/exchange');
const util = require('./util/util');

// use code
const accountList = crud.fetchList('./json-exercies/data.json');

exchange.currentExchange('USD', 'CNY', 10)
    .then((exchangedAmount) => {
        const AliceData = crud.getUser(util.name('Alice'), accountList);
        const WangData = crud.getUser(util.name('Wang'), accountList);
        let account = crud.getAll('./json-exercies/data.json');
        account = [];

        AliceData.balance.amount += exchangedAmount;
        WangData.balance.amount -= exchangedAmount;

        account.push(AliceData);
        account.push(WangData);

        crud.updateList('./json-exercies/data.json', account);
    });
