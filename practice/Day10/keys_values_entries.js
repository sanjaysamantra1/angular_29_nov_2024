let user = { name: 'pradeep', age: 25, address: 'mumbai' };

let allKeys = Object.keys(user);
console.log(allKeys);

let allValues = Object.values(user);
console.log(allValues);

let allEntries = Object.entries(user);
console.log(allEntries);

let userObj = Object.fromEntries(allEntries);
console.log(userObj);