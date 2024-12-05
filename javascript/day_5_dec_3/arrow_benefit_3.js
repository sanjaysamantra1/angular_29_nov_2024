class Student {
    firstName = 'Sachin';
    lastName = 'Tendulkar';
    fullName1() {  // this = how it is called , this = student
        console.log(`${this.firstName} ${this.lastName}`)
    }
    fullName2 = () => { // this = where it is written, this = student
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
let std1 = new Student();
std1.fullName1();  // sachin tendulkar
std1.fullName2();  // sachin tendulkar

// setTimeout : HigherOrder , fullName1 is callback
setTimeout(std1.fullName1 , 2000);  // undefined undefined
setTimeout(std1.fullName2 , 4000);  // sachin tendulkar