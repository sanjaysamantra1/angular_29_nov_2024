// arr=[4,6,8,22,56];
// // higher order func- when one function takes another functions help to execute( one func takes another func as argument)
// // here map is the higher order and function is callback func
// let val1 = arr.map(function(a){
//     return a+5;
// });
// console.log(val1);


// // here increment is call back func
// function increment(a){
//     return a+10;
// }
// let val2 = arr.map(increment());
// console.log(val2);








class Student {
    firstName = "Rohith";
    lastName = "Rudrapati";

    fullName1(){
        // console.log(`${this.firstName} ${this.lastName}`);
        console.log("Rohith");
        // console.log(this);
        
        
    }
    fullName2(){
        // console.log(`${this.firstName} ${this.lastName}`);
        console.log("Rudrapati");
        // console.log(this);
        
    }
}

let val = new Student();
val.fullName1();  //Rohith Rudrapati
val.fullName2();   //Rohith Rudrapati


// setTimeout is higher order and fullname func is call back func
setTimeout(val.fullName1, 1000);
setTimeout(val.fullName2,6000);

// // if we dont access "this" val we can use it or else we get error as it cant read prop of undef val
// // a reg func cant be asigned to a variable 
// let a = val.fullName1;
// a();
// let b=a;
// b();
// let c=a;
// c();








function myHigherOrder(myCallBack){
    console.log(" I am higher order function , i will call fullname function ");
    myCallBack();
}

//myHigherOrder func is higher order, val.fullname is call back func
myHigherOrder(val.fullName1);
myHigherOrder(val.fullName2);