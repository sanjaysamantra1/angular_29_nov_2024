class Student {
    firstName = 'Sachin';
    lastName = 'Tendulkar';
    fullName1() {  // this = how it is called , this = student
        console.log(this)
    }
    fullName2 = () => { // this = where it is written, this = student
        console.log(this)
    }
}
let std1 = new Student();
/* std1.fullName1();  // sachin tendulkar
std1.fullName2();  // sachin tendulkar */

function myHigherOrder(myCallBack) {
    console.log('I am a HigherOrder Function, i will call fullName function ')
    myCallBack();
}
myHigherOrder(std1.fullName2); // myHigherOrder: HigherOrder , fullName2 : callback
myHigherOrder(std1.fullName1); // myHigherOrder: HigherOrder , fullName1 : callback