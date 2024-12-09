/* 
    == equality          (if required it typecasts and compares the values)
    === strict equality  (never typecasts and compares the values)
*/

console.log(5 == 5);   // true
console.log(5 == '5'); // true
console.log(5 == 'a'); // false
console.log(5 === '5'); // false

console.log(1 == true); // true
console.log(1 == 'true'); // false
console.log(1 === true); // false

let arr = [10,20]
console.log( arr == '10,20'); // true , array gets typecasted to string
console.log( arr === '10,20'); // false 
alert(arr);