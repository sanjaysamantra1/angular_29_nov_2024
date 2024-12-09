let user = { firstName: 'sachin', 'last name': 'tendulkar', age: 35, add: 'mumbai' };
console.log(user.firstName);
console.log(user['age']);

// 1. obj.prop cann't be used if the property has a space
// console.log(user.last name);
console.log(user['last name']);

// when key is stored as a variable value use []
let x = 'add';
console.log(user.x); // undefined , looks for 'x' property
console.log(user[x]); // mumbai

console.log('===================X====================')
// print all the keys and all the values
for (let key in user) {
    console.log(key + "    " + user[key]);
}

