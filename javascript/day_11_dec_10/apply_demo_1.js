function add(a, b) { // this = Global / obj1
    console.log(this.num + a + b); // undefined + 2 + 3 (NaN)
}
add(2, 3); // NaN

let obj1 = { num: 4 };
add.call(obj1, 2, 3);  // 9

let arr = [2, 3];
add.call(obj1, arr); // 4 2, 3 undefined

add.apply(obj1, arr); // 9 
// apply() does 2 things, 1st arg is the value of this , 2nd arg is an array
