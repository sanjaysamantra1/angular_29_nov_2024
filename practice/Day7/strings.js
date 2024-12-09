// let string1 = 'It's alright';
let string2 = "It's alright";

// Strings can be created in two ways
// as primitives
let a = 'hello';
let c = 'hello';
// String object
let b = new String('hello');
let d = new String('hello');

console.log(typeof a);
console.log(typeof b);


// comparision
console.log(a == c); // value compare
console.log(c == b); // value compare

console.log(b == d); // address compare if two string objects are compared.

// evaluation
let str5 = '2+5+10';

console.log(eval(str5));

let str6 = new String('100+200');
console.log(eval(str6)); // eval not psbl on String objects

let str7 = str6.valueOf(); // returns string literal which can be evaluated.
console.log(eval(str7));