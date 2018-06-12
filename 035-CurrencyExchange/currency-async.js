const axios = require('axios');

const exchangeRate = async (from, to) => {
    const res = await axios.get('http://data.fixer.io/api/latest?access_key=549352d9d77ec970b254b3cc5e04d3fe');
    const euroBase = 1/res.data.rates[from];
    const rate = euroBase * res.data.rates[to];
    return rate;
};

const nationsOfCurrencies = (nation) => {
    return axios.get(`http://restcountries.eu/rest/v2/currency/${nation}`)
        .then(res => {
            return res.data.map((nation) => nation.name);
        });
};

exchangeRate('KRW', 'CNY').then((rate) => {
    console.log('krw -> cny: ', rate);
});

exchangeRate('USD', 'KRW').then((rate) => {
    console.log('usd -> krw: ', rate);
});

nationsOfCurrencies('USD').then(res => console.log(res));