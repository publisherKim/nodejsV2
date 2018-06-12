const fs = require('fs');

let zsls = [];    // 50,000,000 people' name and tel.

const addZsl = (name, tel) => {
    const zslsFile = fs.readFileSync('zsl-list');
    zsls = JSON.parse(zslsFile);
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

addZsl('Ktk', 821034567890);
console.log(zsls);