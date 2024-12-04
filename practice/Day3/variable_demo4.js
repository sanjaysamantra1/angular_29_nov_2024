// SCOPE

var a = 10;
let b = 20;
const c = 30;

console.log(`Global value of a is ${a}, value of b is ${b} and value of c is ${c}`);


function test() {
    var a = 100;
    let b = 10000;
    const c = 200;
    console.log(`Func scope: value of a is ${a}, value of b is ${b} and value of c is ${c}`);

    {
        //Block scope
        var a = 12;
        let b = 100;
        const c = 200000;
        console.log(`Func block scope: ${a}, ${b}, ${c}`);
    }
}

test();

var a = "hello";
console.log(a);