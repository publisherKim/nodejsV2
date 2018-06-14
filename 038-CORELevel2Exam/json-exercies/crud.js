const fs = require('fs');

const fetchList = (url) => {
    try {
        const data = JSON.parse(fs.readFileSync(url, 'utf-8')); // 실행시점에서의 path 상대경로...
        return data;
    } catch(e) {
        return [];
    }
};

const getUser = (name, targetList) => {
    return targetList.find(item => item.name === name);
};

const getAll = (url) => {
    return fetchList(url);
};

const updateList = (url, parsedJson) => {
    fs.writeFileSync(url, JSON.stringify(parsedJson));
};

module.exports = {
    fetchList,
    getUser,
    getAll,
    updateList
};
