const request = require('request');
const apikey = `662b496c0200b8e1228a05ef75355828`
// 셀프사인 인증서 무시하기
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const weather = () => {
    request({
        url: `https://api.darksky.net/forecast/${apikey}/37.8267,-122.4233`,
        json: true
    }, (err, res, body) => {
        if (err) {
            console.log(`This site can't be reached`);
        } else if (body.status === 'ZERO_RESULTS') {
            console.log(`There is no region matching your input`);
        } else {
            console.log('body.currently.time :', body.currently.time);
        }
    })
};

module.exports.weather = weather;