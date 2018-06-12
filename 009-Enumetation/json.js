const fs = require('fs');

const zsls = [];    // 50,000,000 people' name and tel.

const addZsl = (name, tel) => {
    const zsl = {};
    zsl.name = name;
    zsl.tel = tel;
    
    // enumeration
    const duplicatedZsls = zsls.filter((zsl) => zsl.name === name);

    if(duplicatedZsls.length === 0) {
        zsls.push(zsl);
        // JSON.stringify()를 까먹지 말자
        fs.writeFileSync('zsl-list', JSON.stringify(zsls));
    }
};

addZsl('Superman', 821012345678);
addZsl('Batman', 821098765432);
addZsl('Batman', 821098765432);
console.log(zsls);