const request = require('request');
const apikey = `662b496c0200b8e1228a05ef75355828`
// 셀프사인 인증서 무시하기
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apikey}/${lat},${lng}`,
        json: true
    }, (err, res, body) => {
        if (err) {
            callback(`This site can't be reached`);
        } else if (body.status === 'ZERO_RESULTS') {
            callback(`There is no region matching your input`);
        } else {
            callback(undefined, body.currently.time);
        }
    })
};

module.exports.getWeather = getWeather;