let user = {
    firstName: 'Sachin',
    lastName: 'Tendulkar',
    fullName1: function () { // Regular : this = how the function is called
        console.log(this.firstName + " " + this.lastName); // this = user
    },
    fullName2: () => { // this = global
        console.log(this.firstName + this.lastName)
    }
}
user.fullName1(); // inside fullName1() ,  this  = user
user.fullName2();