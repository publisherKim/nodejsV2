// zsl list
const zsls = [{
    id: 1,
    name: "Superman",
    tel: 821022334455
}, {
    id: 2,
    name: 'Antman',
    tel: 821088776655
}];

// transaction history
const revenues = [{
    id: 1,
    tel: 821023334455,
    revenue: 345
}, {
    id: 1,
    tel: 821023334455,
    revenue: 1345
}, {
    id: 2,
    tel: 821088776655,
    revenue: 3451
}, {
    id: 2,
    tel: 821088776655,
    revenue: 135
}];

const oneOrTwo = parseInt(Math.random() * 2) + 1;

const getZsl = async (id) => {
    return await zsls.filter(item => item.id === id);
};

const getAverageRevenue = async (zsl) => {
    const revenuesOfZsl = revenues.filter((revenue) => revenue.id === zsl[0].id);
    return await revenuesOfZsl.map((zsl) => zsl.revenue).reduce((a, b) => a + b) / revenuesOfZsl.length;
};

getZsl(oneOrTwo).then((zsl) => {
        return getAverageRevenue(zsl);
    }).then((avg) => {
        console.log(avg);
    })
    .catch((e) => {
        console.log(e);
    })
