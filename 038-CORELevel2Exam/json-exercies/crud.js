const fs = require('fs');

const fetchList = () => {
    try {
        // 2가지 표현이 된다.
        // const data = JSON.parse(fs.readFileSync('./data.json'));
        const data = fs.readFileSync('./json-exercies/data.json', 'utf-8'); // 실행시점에서의 path 상대경로...
        return data;
    } catch(e) {
        return [];
    }
};

const account = fetchList();

module.exports = {
    fetchList
}
