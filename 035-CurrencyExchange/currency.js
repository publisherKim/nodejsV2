const axios = require('axios');

const exchangeRate = (from, to) => {
    return axios.get('http://data.fixer.io/api/latest?access_key=549352d9d77ec970b254b3cc5e04d3fe')
        .then((res) => {
            const euroBase = 1/res.data.rates[from];
            const rate = euroBase * res.data.rates[to];
            return rate;
        });
};

exchangeRate('KRW', 'CNY').then((rate) => {
    console.log('krw -> cny: ', rate);
});

exchangeRate('USD', 'KRW').then((rate) => {
    console.log('usd -> krw: ', rate);
});