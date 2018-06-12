function foo(b) {
    const a = 5;
    return a * b + 10;
}

function bar(x) {
    const y = 3;
    return foo(x*y);
}

console.log(bar(6));