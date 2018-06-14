const fs = require('fs');

const fetchList = () => {
    try {
        const data = JSON.parse(fs.readFileSync('./json-exercies/data.json', 'utf-8')); // 실행시점에서의 path 상대경로...
        return data;
    } catch(e) {
        return [];
    }
};

module.exports = {
    fetchList
}
