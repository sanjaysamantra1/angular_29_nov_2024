var a = 10;
let b = 20;
const c = 30;
console.log(`a is ${a} , b is ${b} , c is ${c}`);

var a = 15; // re-declaration is allowed - yes
console.log(`a is ${a} , b is ${b} , c is ${c}`);

let b = 25;     // SyntaxError: Identifier 'b' has already been declared
const c = 35;   // SyntaxError: Identifier 'c' has already been declared