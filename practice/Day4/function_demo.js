// hoisting is a behavior where variable and function declarations are moved to the top of their scope before code execution. Here add function can be used before it's defined in code. only declarations are hoisted, not intializations..that means values are not available until initialized in code.
// Function declaration / NAMED FUNCTION
add(2, 3);

function add(a, b) {
    console.log(`addition of ${a} and ${b} is ${a + b}`);
}

add(10, 20);

// Function expression / Anonymous function
let sub = function (a, b) {
    console.log(`subtraction of ${b} from ${a} is ${a - b}`);
}

sub(20, 100);

// IIFE - Immediately invoked function expression
(function (a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`)
})(4, 5);


// Arrow functions
let div = (a, b) => {
    console.log(`Division of ${a} and ${b} is ${a / b}`);
}

div(200, 100);