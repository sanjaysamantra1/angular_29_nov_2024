let obj1 = { a: 10, b: 20 };
let obj2 = Object.create(obj1);

console.log(obj1, obj2);

console.log('obj1', obj1.a, obj1.b);
console.log('obj2', obj2.a, obj2.b);

obj1.a = 15;
obj2.b = 25; // obj2 adds a prop b with value 25;

console.log('obj1', obj1.a, obj1.b);
console.log('obj2', obj2.a, obj2.b);

//access prototype value
console.log('obj2', obj2.a, obj2.__proto__.b);
