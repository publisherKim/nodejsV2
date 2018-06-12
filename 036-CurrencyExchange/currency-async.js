const axios = require('axios');

const nationsOfCurrencies = async (nation) => {
    return await axios.get(`http://restcountries.eu/rest/v2/currency/${nation}`);
};


nationsOfCurrencies('USD').then(res => console.log(res.data.map(nation => nation.name)));