function test(a, b, ...c) { // a,b are normal params , c is rest param
    console.log(a, b, c); // 10 20 [30, 40, 50, 60]
}
test(10, 20, 30, 40, 50, 60);

/* 
function test(a, ...b, c) {  // SyntaxError: Rest parameter must be last formal parameter
    console.log(a, b, c);
}
test(10, 20, 30, 40, 50, 60); 
*/

