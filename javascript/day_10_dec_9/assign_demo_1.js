let obj1 = { a: 10, b: 20 }
let obj2 = { c: 30, d: 40 }
let obj3 = { e: 50 }
// assign(target , source1,source2,...)
Object.assign(obj1, obj2, obj3);
console.log('Obj1: ', obj1); // { a: 10, b: 20, c: 30, d: 40, e: 50 }
console.log('Obj2: ', obj2); // { c: 30, d: 40 }
console.log('Obj3: ', obj3); // { e: 50 }


let user1 = { name: 'sanjay', age: 55, add: 'bangalore' };
let user2 = user1;  // Reference Copy
let user3 = Object.assign({}, user1); // shalllow copy
let user4 = { ...user1 }; // shallow copy
let user5 = structuredClone(user1); // Deep Copy
