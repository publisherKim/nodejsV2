const axios = require('axios');

const exchangeRate = async (from, to) => {
    const res = await axios.get('http://data.fixer.io/api/latest?access_key=549352d9d77ec970b254b3cc5e04d3fe');
    const euroBase = 1 / res.data.rates[from];
    const rate = euroBase * res.data.rates[to];
    return rate;
};

const nationsOfCurrency = async (currency) => {
    const res =  await axios.get(`http://restcountries.eu/rest/v2/currency/${currency}`);
    return res.data.map(nation => nation.name);
};


const currenciesOfNation = async (nationArg) => {
    const nation = await axios.get(`http://restcountries.eu/rest/v2/all`)
        .then(res => res.data.filter(nation => nation.name === nationArg));
    return nation[0].currencies;
};


const currentExchange = async (from, to, amount) => {
    const rate = await exchangeRate(from, to);
    const exchangedAmount = (rate * amount).toFixed(2);
    const countries = await nationsOfCurrency(to);
    console.log(`${amount} in ${from} was exchanged to ${exchangedAmount} in ${to}. You can use it in ${countries}`);
};
currentExchange('USD', 'KRW', 30);
currentExchange("USD", "JPY", 1000);