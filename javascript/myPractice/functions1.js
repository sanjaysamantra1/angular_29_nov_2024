
var firstName1= 'Sachin';
var lastName1= 'Tendulkar';

let user = {
    firstName: 'Sachin',
    lastName: 'Tendulkar',
    fullName1: function () { // Regular : this = how the function is called
        console.log(this.firstName + " " + this.lastName); // this = user
    },
    fullName2: () => { // this = global
        console.log(firstName1 + lastName1)
    }
}
user.fullName1(); // inside fullName1() ,  this  = user
user.fullName2();