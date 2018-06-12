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

const getZsl = (id) => {
    console.log(3);
    const zsl = zsls.filter(item => item.id === id);
    console.log(4);
    return zsl;
};

const getAverageRevenue = async (zsl) => {
    console.log(1);
    const zsl = getZsl(id);
    console.log(2);
    const revenuesOfZsl = revenues.filter((revenue) => revenue.id === zsl[0].id);
    return await revenuesOfZsl.map((zsl) => zsl.revenue).reduce((a, b) => a + b) / revenuesOfZsl.length;
};

getAverageRevenue(oneOrTwo)
    .then((avg) => {
        console.log(avg);
    })
    .catch((e) => {
        console.log(e);
    })
