// zsl list
const zsls = [{
    id: 1,
    name: "Superman",
    tel: 821022334455
},{
    id: 2,
    name: 'Antman',
    tel: 821088776655
}];

// transaction history
const revenues = [{
    id: 1,
    tel: 821023334455,
    revenue: 345
},{
    id: 1,
    tel: 821023334455,
    revenue: 1345
},{
    id: 2,
    tel: 821088776655,
    revenue: 3451
},{
    id: 2,
    tel: 821088776655,
    revenue: 135
}];

const oneOrTwo = parseInt(Math.random() * 2) + 1;

const getZsl = (id) => {
    return new Promise((resolve, reject) => {
        resolve(zsls.filter(item => item.id === id)[0]);
    });
};

const getAverageRevenue = (id) => {
    return new Promise((resolve, reject) => {
        const temp = revenues.filter((item) => item.id === id);
        let total = 0;
        temp.forEach(item => total += item.revenue);
        return resolve(total/temp.length);
    });
};

getZsl(oneOrTwo).then((zsl) => {
    return getAverageRevenue(zsl.id);
}).then((avg) => {
    console.log(avg);
})
.catch((e) => {
    console.log(e);
})
