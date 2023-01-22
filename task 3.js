function one(a) {
    return function two(b) {
        return a + b;
    };
}

let sum1 = one(10);
let sum2 = two(20);
console.log(sum1 + sum2);