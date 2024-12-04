let user = {
    firstName: "Pradeep",
    lastName: "Yendluri",

    fullName1: function () { // REGULAR FUNC: this = how and where the function is called from 
        console.log(this.firstName + " " + this.lastName);
    },
    fullName2: (userdetails) => { //this doesn't exist here // global scope 
        console.log(userdetails.firstName + " " + userdetails.lastName);
    }
}

user.fullName1();

user.fullName2(user);
