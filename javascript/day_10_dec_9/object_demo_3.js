/* 
How to check if a property exists in an object

console.log(propertyName in obj)(also includes prototype properties)
obj.hasOwnProperty(propertyName)(doesn't includes prototype properties) 
*/
class Student {
    constructor(roll, name, branch) {
        this.roll = roll;
        this.name = name;
        this.branch = branch;
    }
}
Student.prototype.clgName = 'Eureca Infotech';
Student.prototype.clgAddress = 'Harrisburg';

let std1 = new Student(101, 'Rahul', 'CS');
let std2 = new Student(102, 'Deepak', 'Civil');
console.log(std1.name, std1.clgName);

console.log('name' in std1);    // true
console.log('clgName' in std1); // true
console.log('dob' in std1);     // false
// Note: 'in' returns true , if the property is present either directly or in the protype of the object
console.log('========================================')
console.log(std1.hasOwnProperty('name')); // true
console.log(std1.hasOwnProperty('clgName')); // false
console.log(std1.hasOwnProperty('dob')); // false
// Note: hasOwnProperty() returns true , only if the property is present directly in the object, it doesn't consider the prototype properties
