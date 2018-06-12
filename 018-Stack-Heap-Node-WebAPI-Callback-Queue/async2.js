const square = (a, b) => {
    return multiply(a, b);
};

const multiply = (a, b) => {
    return product(a, b);
};

const product = (a, b) => {
    return a * b;
};

const result = square(10, 10);  // 100
console.log(result);