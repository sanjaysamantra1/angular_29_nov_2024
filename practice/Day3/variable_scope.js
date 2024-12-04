var a = 10; //global

function test() {
    var a = 100;
    var b = 1002;
    console.log(`Function: ${a}, ${b}`);

}
test();
console.log(`Global ${a}, ${b}`) //ReferenceError: b is not defined