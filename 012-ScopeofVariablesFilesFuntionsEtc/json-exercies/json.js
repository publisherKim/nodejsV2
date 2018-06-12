const fs = require('fs');

const fetchZslList = () => {
    try {
        const zslsFile = fs.readFileSync('./json-exercies/zsl-list');
        return JSON.parse(zslsFile);
    } catch (e) {
        return [];
    }
};

const saveZslList = (parsedJson) => {
    fs.writeFileSync('./json-exercies/zsl-list', JSON.stringify(parsedJson));
}

const addZsl = (name, tel) => {
    const parsedJson = fetchZslList();

    const zsl = {};
    zsl.name = name;
    zsl.tel = tel;

    const duplicatedZsls = parsedJson.filter((zsl) => zsl.name === name);

    if (duplicatedZsls.length === 0) {
        parsedJson.push(zsl);
        saveZslList(parsedJson);
    }
};

module.exports = {
    addZsl
}