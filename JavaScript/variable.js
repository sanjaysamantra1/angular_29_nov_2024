
// var a=10; // can redeclare
// let b=16; // can redeclare
// const c=13; // cant redeclare

// console.log(`a is ${a} , b is ${b}, c is ${c}`);




// --------------2-changing values-------------------

// a=17;
// b=24;
// // c=24;

// console.log(`a is ${a} , b is ${b}, c is ${c}`);


// const cars=['rohith','Rudrapati'];
// console.log(cars);
// cars.push('Developer');
// console.log(cars);
// const cars=['rohith','Rudrapati','Developer']; // cant assign a new value in array we can only push to add ,

// const user = {name: 'Rohith',age:24};
// user.add = 'Hyderabad';
// user.age='23';
// console.log(user);




// ----------------3- initialization-----------------
// var a; // not mandatory to initialize
// let b; // not mandatory to initialize
// const c=30; //  mandatory to initialize
// // const c; // mandatory to initialize const for const variables
// console.log(`a is ${a} , b is ${b}, c is ${c}`);


// 4- declaration

// for var we can redeclare but for let and const we cant
// var a =1;
// console.log(a);
// var a=13;
// console.log(a);





// -- function/global/block scoped
// var: Old, avoid using it (global or function scope).
// let: Use for variables that will change (block scope).
// const: Use for variables that won’t change (block scope).


// var a=10;
// let b=20;
// const c=30;
// console.log(`Global: a is ${a}, b is ${b},c is ${c}`);


// function test(){
//     var a=50;
// let b=90;
// const c=70;
// console.log(`Function scope: a is ${a}, b is ${b},c is ${c}`);

// if(true){
//     var a=30;
//     let b=40;
//     const c=59;
//     console.log(`Block Scope: a is ${a}, b is ${b},c is ${c}`);

// }
// }

// test();

// var a = 'hi';
// // let b = 'hello'




