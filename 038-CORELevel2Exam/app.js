// 불러오기
const crud = require('./json-exercies/crud');
const exchange = require('./program/exchange');
const util = require('./util/util');

// use code
const accountList = crud.fetchList();

exchange.currentExchange('USD', 'CNY', 10)
    .then((exchangedAmount) => {
        // crud.updateList();
        // 절차 급땅기네, 절차를 못벗어나네 -_-;;;
        const AliceData = crud.getUser(util.name('Alice'), accountList);
        const WangData = crud.getUser(util.name('Wang'), accountList);
        const account = [];

        AliceData.balance.amount += exchangedAmount;
        WangData.balance.amount -= exchangedAmount;

        account.push(AliceData);
        account.push(WangData);

        crud.updateList(account);
    });
