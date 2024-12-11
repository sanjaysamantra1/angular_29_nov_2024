let obj1 = { a: 10, b: 20 };

obj1.c = 30;
delete obj1.b;
obj1.a = 300;

console.log(obj1);

console.log(`object is sealed : obj1: ${Object.isSealed(obj1)}`);

let obj2 = { a: 1000, b: 2000 };
Object.seal(obj2);

obj2.a = 100000; // can update available props
obj2.c = 23400; //cannot add new props
delete obj2.b; // no deletion available after sealing

console.log(obj2);

console.log(`object is sealed : obj1: ${Object.isSealed(obj2)}`);
