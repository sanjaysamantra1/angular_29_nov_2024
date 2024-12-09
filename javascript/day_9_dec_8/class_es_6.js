// ECMASCRIPT-6  >2015
class Student {
    constructor(roll, name, branch) {
        this.roll = roll;
        this.name = name;
        this.branch = branch;
    }
    fullName = function () {
        console.log(this.fname + " " + this.lname);
    }
}
let std1 = new Student(101, 'Rahul', 'CS')
let std2 = new Student(102, 'Deepak', 'Civil')
console.log(std1)
console.log(std2)