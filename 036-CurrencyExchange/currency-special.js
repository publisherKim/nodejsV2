const axios = require('axios');

const currenciesOfNation = async (nationArg) => {
    const nation = await axios.get(`http://restcountries.eu/rest/v2/all`)
        .then( res => res.data.filter(nation => nation.name === nationArg));
    return nation[0].currencies;
};

console.log( currenciesOfNation('Zimbabwe'));