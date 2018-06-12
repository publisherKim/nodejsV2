// ES6 Promise

const myFirstPromise = new Promise((resolve, reject) => {
    resolve(1+3);
    reject('Something wrong');
});

myFirstPromise.then((message) => {
    console.log(message);
}, (errMessage) => {
    console.log(errMessage);
});

const myFirstPromise2 = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && b === 'number') resolve(a + b);
        reject('Something wrong');
    });
};

myFirstPromise2(3, '5').then((message) => {
    console.log(message);
}, (errMessage) => {
    console.log(errMessage);
});

const myFirstPromise3 = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof a === 'number' && typeof b === 'number' ? resolve(a + b) : reject('Something wrong');
        }, 1000);

    });
};

myFirstPromise3(3, 5).then((message) => {
    console.log(message);
}, (errMessage) => {
    console.log(errMessage);
});

const myFirstPromise4 = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof a === 'number' && typeof b === 'number' ? resolve(a + b) : reject('Something wrong');
        }, 1000);

    });
};

myFirstPromise4(1, '2').then((message) => {
    console.log(message);
    return myFirstPromise4(4, 6);
}).then((message) => {
    console.log(message);
}).catch((errorMessage) => {
    console.log(errorMessage);
})