// REDECLARATION

var a = 10;
let b = 100;
const c = 10000;

console.log(`value of a is ${a}, value of b is ${b}, value of c is ${c}`);

var a = 10000000;
console.log(`value of a is ${a}`);

// let b = 100; SyntaxError: Identifier 'b' has already been declared
// const c = 10000; SyntaxError: Identifier 'c' has already been declared