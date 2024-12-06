var a = 10;
let b = 20;
const c = 30;
console.log(`Global: a is ${a}, b is ${b}, c is ${c}`);


function func_var() {
    var a = 100;
    let b = 204;
    const c = 304;
    console.log(`Function: a is ${a}, b is ${b}, c is ${c}`);

    if(true){
        var a=2002;
        let b=244;
        const c=225;
        console.log(`Block: a is ${a}, b is ${b}, c is ${c}`);
        myName="Akshay Joshi";
    }
}
func_var();


var  a='Hi';

// let b='hiiii'; // 
console.log(a); // hi
console.log(b); // 30
console.log(c); // 30



console.log(myName);