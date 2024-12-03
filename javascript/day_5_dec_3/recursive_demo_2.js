function fact(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}
let res = fact(5);  // factorial of 5  is 120
console.log(`Factorial of 5 is ${res}`);