class Student {
	constructor(roll, lname, fname, age, branch) {
		this.roll = roll;
		this.fname = fname;
		this.lname = lname;
		this.age = age;
		this.branch = branch;
	}
	fullName = function () {
		console.log(`${this.fname} ${this.lname}`);
	};
}
let std1 = new Student(101, 'yendluri', 'pradeep', 23, 'CSE');
std1.fullName();
console.log(std1);
