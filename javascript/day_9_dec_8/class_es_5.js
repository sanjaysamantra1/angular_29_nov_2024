// ECMASCRIPT-5 <2015
function Student(roll, fname, lname, branch) { // constructor
    this.roll = roll;
    this.fname = fname;
    this.lname = lname;
    this.branch = branch;
    this.fullName = function () {
        console.log(this.fname + " " + this.lname);
    }
}
let std1 = new Student(101, 'Rahul', 'kumar','CS')
let std2 = new Student(102, 'Deepak', 'adkfj','Civil')
console.log(std1)
console.log(std2)
std1.fullName();