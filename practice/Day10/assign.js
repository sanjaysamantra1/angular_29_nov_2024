let obj1 = { a: 10, b: 20 };
let obj2 = { c: 30, d: 40 };
let obj3 = { e: 50 };

Object.assign(obj1, obj2, obj3); // (target, source1, source2...)
console.log('Obj1', obj1);
console.log('Obj2', obj2);
console.log('Obj3', obj3);

let user = {
	name: 'pradeep',
	age: 55,
	add: 'bangalore',
};
let user2 = user;
let user3 = Object.assign({}, user);
let user4 = { ...user };
let user5 = structuredClone(user);

console.log(user, user2, user3, user4, user5);
