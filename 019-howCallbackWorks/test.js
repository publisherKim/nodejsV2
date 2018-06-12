const json = require('./json-exercies/json');

const getZsl = (name, callback) => {
    const zsl = json.getZsl('Uk');
    setTimeout(() => {
        callback(zsl);
    }, 3000);
    
};

getZsl('Uk', (zslObject) => {
    console.log(zslObject);
})