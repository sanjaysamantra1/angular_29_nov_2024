let obj1 = { a: 10, b: 20 };
obj1.c = 30;
delete obj1.b;
obj1.a = 15;
console.log(obj1);

console.log(`obj 1 is frozen? ${Object.isFrozen()}`);

let obj2 = { a: 100, b: 200 };

Object.freeze(obj2);

obj2.c = 2000;
obj2.a = 1000;
delete obj2.b;

console.log(obj2);

console.log(`obj 2 is frozen? ${Object.isFrozen()}`);
