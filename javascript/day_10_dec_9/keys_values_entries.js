let user = { name: 'sachin', age: 35, add: 'mumbai' };

let allKeys = Object.keys(user);
console.log(allKeys);

let allValues = Object.values(user);
console.log(allValues);

let allEntries = Object.entries(user);
console.log(allEntries);

// convert entries to object
let userObj = Object.fromEntries(allEntries);
console.log(userObj)