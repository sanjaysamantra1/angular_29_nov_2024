function add(a, b) { // this = Global / obj1
    console.log(this.num + a + b); // undefined + 2 + 3 (NaN)
}
add(2, 3);

let obj1 = { num: 4 };
add.call(obj1, 2, 3); // call add() , inside add() this = obj1

obj2 = { num: 7 };
add.call(obj2, 2, 3); // call add() , inside add() this = obj2
