// 1. Function Declaration / Named Function
add(2, 3);
function add(a, b) {
    console.log(`Addition of ${a} & ${b} is ${a + b}`)
}
add(10, 20);

// 2. Function Expression / Anonymous function
let sub = function (a, b) {
    console.log(`Subtraction of ${a} & ${b} is ${a - b}`)
}
sub(10, 5);
/* 
    1. Function Declaration is Named , Function Expression is anonymous
    2. Function Declaration is hoisted , Function Expression is not hoisted
*/

// 3. IIFE / Immediately Invoked Function Expression
(function (a, b) {
    console.log(`Multiplication of ${a} & ${b} is ${a * b}`)
})(4, 5);

// 4. Arrow Function / lambda function
let div =  (a, b)=> {
    console.log(`Division of ${a} & ${b} is ${a / b}`)
}
div(10, 5);