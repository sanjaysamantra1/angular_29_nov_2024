function add(a, b, c) {
    console.log(a + b + c);
}
add(2, 3); // NaN

// ES_5
function sum(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    console.log(a + b + c);
}
sum(2, 3); // 2 3 0

// ES_6
function sum(a, b, c = 0) {
    console.log(a + b + c);
}
sum(2, 3);    // 2 3 0
sum(2, 3, 4); // 2 3 4