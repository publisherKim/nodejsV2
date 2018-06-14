const fs = require('fs');

const fetchList = () => {
    try {
        const data = JSON.parse(fs.readFileSync('./json-exercies/data.json', 'utf-8')); // 실행시점에서의 path 상대경로...
        return data;
    } catch(e) {
        return [];
    }
};

const getUser = (name, targetList) => {
    return targetList.find(item => item.name === name);
};

const getAll = () => {
    return fetchList();
};

const updateList = (parsedJson) => {
    fs.writeFileSync('./json-exercies/data.json', JSON.stringify(parsedJson));
};

module.exports = {
    fetchList,
    getUser,
    getAll,
    updateList
};
