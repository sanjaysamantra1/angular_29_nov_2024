let employees = [
	{ eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
	{ eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
	{ eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
	{ eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
	{ eId: 106, name: 'sanjay', sal: 5500, gender: 'male' },
	{ eId: 107, name: 'alok', sal: 7001, gender: 'male' },
	{ eId: 108, name: 'alok', sal: 7000, gender: 'male' },
];

// 1. declare array of employees & sort them in ascending order (empId)
employees.sort((a, b) => a.eId - b.eId);
console.log(employees);

// 2. declare array of employees & sort them in ascending order by name.
employees.sort((employeeA, employeeB) =>
	employeeA.name.localeCompare(employeeB.name)
);
console.log(employees);

// 3. declare array of employees & filter the employees whose sal>6000;
employees.filter((employee) => employee.sal > 6000);
console.log(employees);

// 4. declare array of employees & increase sal of every employee by 500;
employees.map((employee) => (employee.sal += 500));
console.log(employees);
// 5. declare array of employees & add "comp:ibm" to every employee;

employees.map((employee) => (employee.comp = 'ibm'));
console.log(employees);
// 6. convert array of letters to array of words
// 		const inputArr = [
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];

const inputArr = [
	'b',
	'a',
	'k',
	'e',
	'',
	'c',
	'a',
	'k',
	'e',
	'',
	'e',
	'a',
	't',
];
let output = [];
let startIndex = 0;
for (let index in inputArr) {
	if (inputArr[index] === '' || index == inputArr.length - 1) {
		output.push(inputArr.slice(startIndex, Number(index) + 1).join(''));
		startIndex = Number(index) + 1;
	}
}
console.log(output);
// 7. add Dept info for each employee
let employees1 = [
	{ eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
	{ eId: 104, name: 'reena', sal: 8000, gender: 'female' },
];
let departments = [
	{ eId: 101, dept: 'sales' },
	{ eId: 104, dept: 'marketing' },
];

employees1.map(function (employee) {
	let d = departments.filter((department) => department.eId == employee.eId);
	employee.dept = d[0].dept;
	return employee;
});

console.log(employees1);
// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}
output8 = Object.groupBy(employees, ({ name }) => name);
console.log(output8);

// 9. intersection of 2 number arrays
let arr1 = [1, 3, 4, 5, 7, 7];
let arr2 = [4, 5, 6, 7, 2];

let intersectedArr = arr1.filter((value) => arr2.includes(value));
console.log(intersectedArr);

// 10. WAP to print the occurance of each elements
// input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}
input10 = [10, 20, 30, 40, 50, 10, 30, 50];
output = {};

for (let n of input10) {
	if (n in output) {
		output[n] = output[n] + 1;
	} else {
		output[n] = 1;
	}
}
console.log(output);
