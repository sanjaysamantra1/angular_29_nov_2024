class Student {
    firstName = 'Sachin';
    lastName = 'Tendulkar';
    fullName1() {  // this = how it is called , this = student
        console.log('I am fullname-1 function')
        console.log(this)
    }
    fullName2 = () => { // this = where it is written, this = student
        console.log('I am fullname-2 function')
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
let std1 = new Student();
std1.fullName1();  // sachin tendulkar
std1.fullName2();  // sachin tendulkar

let a = std1.fullName2;
a();
let b = a;
b();
let c = b;
c();

let f1 = std1.fullName1; // a regular function cann't be assigned to variable and invoked
f1();
// a regular function written inside a class should always be invoked with the object.
// if a regular function is stored in a variable, that function is invoked without the object
// inside the function this will not be pointing to the class instance.