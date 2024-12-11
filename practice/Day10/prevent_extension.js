let obj1 = { a: 10, b: 20 };

obj1.c = 30;

delete obj1.b;

obj1.a = 15;

console.log(obj1);
console.log(`is obj1 is extensible ${Object.isExtensible(obj1)}`);

let obj2 = { a: 100, b: 200 };
Object.preventExtensions(obj2);

obj2.c = 10000;

delete obj2.b;

obj2.a = 300;

console.log(obj2);
console.log(`is obj2 is extensible ${Object.isExtensible(obj2)}`);
