class Student {
	constructor(roll, name, branch) {
		this.roll = roll;
		this.name = name;
		this.branch = branch;
	}
}

Student.prototype.clgName = 'Eureka Infotech';
Student.prototype.clgAdress = 'Tennessee';

let std1 = new Student(101, 'Rahul', 'CS');
let std2 = new Student(102, 'Deepak', 'CIVIL');

console.log(std1.name, std1.clgName);

console.log('name' in std1);
console.log('clgName' in std1);
console.log('dob' in std1);

console.log(std1.hasOwnProperty('name'));
console.log(std1.hasOwnProperty('clgName'));
console.log(std1.hasOwnProperty('dob'));
