//function declaration
sum(2, 13);
function sum(a, b){
    return console.log(a+b);
}
sum(2, 3);

//function expression
let mul1 = function(x, y){
    return console.log(x*y);
}
mul1(4, 5);

//function IIEF
(function(c, d){
    return console.log(c-d);
})(5, 2);


//Arrow function
let sum1 = (e, f) => {
    return console.log(e+f);
}
sum1(6, 5);