var a = 10;
let b = 100;
const c = 76;

console.log(`a value is ${a} - b value is ${b} - c value is ${c}`);
a = 24;
b = 45;
//c=312;  //TypeError: Assignment to constant variable.
console.log(`a value is ${a}, b value is ${b} and c value is ${c}`);

const cars = ['Ford', 'Toyota']

console.log(cars);

cars.push("Mercedes");
console.log(cars);

//cars = ['mahindra', 'tata']; // TypeError: Assignment to constant variable. CANNOT ASSIGN NEW ARRAY TO CONST VARIABLE...YOU CAN USE METHODS ON IT.

const user = { name: "Pradeep Yendluri", age: 25 };
console.log(user);

user.address = 'Vinukonda'; // adding a new property to the object is allowed
user.age = 30; // change value is possible

console.log(user);

// user = { name: 'Rahul', age: 56 }; -- // cannot assign new object to variable. TypeError: Assignment to constant variable.
