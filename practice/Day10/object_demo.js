let user = {
	firstName: 'Pradeep',
	'last Name': 'Yendluri',
	age: 25,
	address: 'Tennessee',
};

console.log(user.firstName);
console.log(user['age']);
console.log(user['last Name']);

let x = 'address';
console.log(user.x); // looks for 'x' prop
console.log(user[x]); // substitutes x for 'address'

// print keys and their associated values.
for (let key in user) {
	console.log(`${key} - ${user[key]}`);
}
