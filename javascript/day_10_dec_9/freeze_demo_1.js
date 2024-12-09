let obj1 = { a: 10, b: 20 };
obj1.c = 30;    // add a new property - yes
delete obj1.b;  // delete a property  - yes
obj1.a = 15;    // update value - yes
console.log(obj1); // {a : 15 , c : 30}
console.log('obj1 is Frozen: ', Object.isFrozen(obj1)); // false

let obj2 = { a: 100, b: 200 };
Object.freeze(obj2); 
obj2.c = 300;    // add a new property - No
delete obj2.b;   // delete a property  - No
obj2.a = 150;    // update value - No
console.log(obj2); // { a: 100, b: 200 }
console.log('obj2 is Frozen: ', Object.isFrozen(obj2)); // true

