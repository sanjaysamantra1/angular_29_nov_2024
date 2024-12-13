console.log(`a is ${a}`); // undefined , hoisting
console.log(`b is ${b}`); // error
console.log(`c is ${c}`); // error
var a = 10;
let b = 20;
const c = 30;
console.log(`a is ${a}`);
console.log(`b is ${b}`);
console.log(`c is ${c}`); 