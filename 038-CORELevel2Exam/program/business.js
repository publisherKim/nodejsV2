const axios = require('axios');

const exchangeRate = async (from, to) => {
    const res = await axios.get('http://data.fixer.io/api/latest?access_key=549352d9d77ec970b254b3cc5e04d3fe');
    const base = 1 / res.data.rates[from];
    const rate = base * res.data.rates[to];
    return rate;
};

const currentExchange = async (from, to, amount) => {
    const rate = await exchangeRate(from, to);
    return await parseInt(rate * amount);
};

module.exports = {
    exchangeRate,
    currentExchange
};