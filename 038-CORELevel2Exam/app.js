// 불러오기
const crud = require('./json-exercies/crud');
const exchange = require('./program/exchange');

// use code
const accountList = crud.fetchList();

exchange.currentExchange('USD', 'CNY', 10)
    .then((exchangedAmount) => {
        // 절차 급땅기네, 절차를 못벗어나네 -_-;;;
        const AliceData = crud.getUser('Alice', accountList);
        const WangData = crud.getUser('Wang', accountList);
        const add = AliceData.balance.amount + exchangedAmount;
        const minus = WangData.balance.amount - exchangedAmount;
        const account = crud.getAll();
        account[0].balance.amount = add;
        account[1].balance.amount = minus;
        console.log(add);
        console.log(minus);
        console.log(account);
    });
