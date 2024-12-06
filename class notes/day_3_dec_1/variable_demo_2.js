var a = 10;
let b = 20;
const c = 30;
console.log(`a is ${a} , b is ${b} , c is ${c}`);
a = 15;
b = 25;
// c = 35; // TypeError: Assignment to constant variable.
console.log(`a is ${a} , b is ${b} , c is ${c}`);

const cars = ['tata', 'honda'];
console.log(cars);
cars.push('mahindra'); // yes
console.log(cars);
// cars = ['tata','honda','BMW']; // assigning a new array is not allowed , TypeError: Assignment to constant variable.

const user = { name: 'sanjay', age: 30 };
user.add = 'Bangalore'; // add a new property - yes
user.age = 35; // update the value - yes
console.log(user);
user = { name: 'rahul', age: 25, add: 'harrisburg' }; // can we assign a new obj - NO