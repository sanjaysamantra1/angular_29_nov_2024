// let cars = ['Toyota', 'Honda', 'Maruti', 'Hundai'];
// console.log(cars.length); // 4
// delete cars[2];  // only deltes the value and not the placeholder
// console.log(cars.length); // 4
// console.log(cars);        // [ 'Toyota', 'Honda', <1 empty item>, 'Hundai' ]

// cars.splice(1, 3); // deletes the value and placeholder // delete start from index 1 to 3 indexes
// console.log(cars); // [ 'Toyota', 'Honda', 'Hundai' ]



// // splice()    1.only insert   2. only delete  3. both insert and delete
// // splice(ind , #elements to delete , elements to insert)
// let arr = [10, 20, 30, 40, 50];
// arr.splice(1, 2); // only delete
// console.log(arr);

// // arr.splice(startfrom,deletecount,item1toadd,item2toadd,....)
// arr.splice(1, 0, 20, 30); // only insert
// console.log(arr);
// arr.splice(1, 2, 25, 35);
// console.log(arr)




// let cars = ['Toyota', 'Honda', 'Maruti', 'Hundai'];

// // 1. loop - use this if we are working with particular i values i mean particular value inside the array
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// console.log('==================================')

// // 2. for-in  ES_6 (2015) // cant work for reverse searching/looping where we can use it in basic loop above
// for (ind in cars) {
//     console.log(`${ind}----------${cars[ind]}`)
// }
// console.log('==================================')

// // 3. for-of //we cant access the indexs if we want to work only on data inside array we use it
// for (car of cars) {
//     console.log(car)
// }
// console.log('==================================')

// // 4. forEach()  // it wont create any new array or change the existing array 
// let res = cars.forEach((val, ind, arr) => {
//     console.log(`${val}===${ind}===${arr}`)
// })
// console.log(res);


// // map() // used for creating new array and updating it with the new data which we got after working on it
// let arr1 = [10, 20, 30, 40, 50];
// let res1 = arr1.map(ele => ele + 5);
// console.log(res1)





// //FIND

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
// // find the first female employee in this list
// // this find will work only for first search and ignore the next ones
// let first_fem_emp = employees.find((emp)=>emp.gender==='female');
// console.log(first_fem_emp);


// // at what index the first female employee is present
// // checks only first matched one and give its index
// let first_fem_emp_index = employees.findIndex((emp)=>emp.gender==='female');
// console.log(first_fem_emp_index);


// // who is the last female employee in the list
// let last_fem_emp=employees.findLast((emp)=>emp.gender==='female');
// console.log(last_fem_emp);

// // at what index the last female employee is present
// let last_fem_emp_index = employees.findLastIndex((emp)=>emp.gender==="female");
// console.log(last_fem_emp_index);


// // give me all the female employees
// // we use filter to give all the matched ones
// let all_fem_emp = employees.filter((emp)=>emp.gender==='female')
// console.log(all_fem_emp);




// //Map

// // give me all the female employees
// let all_fem_emp = employees.filter((emp)=>emp.gender==="female");
// console.log(all_fem_emp);


// // map() is used to manipulate each element in the array and return a new array
// // add 1000 to evry one in salary
// let all_fem_emp_map = employees.map((emp)=>{
//     emp.sal+=10000;
//     return emp;
// })
// console.log(all_fem_emp_map);



//REDUCE

let arr = [10, 20, 30, 40, 50]; // prev will be 0 and curr will be 10 and will add accdngly
let sum =arr.reduce((prev,curr)=>{
    console.log(prev,curr);
    return prev+curr; //this will be prev again
},0);
console.log(sum);


// reverse a string using reduce method
let str = "Hello World";
let val = str.split('') 
// console.log(val); // ['H', 'e', 'l', 'l','o', ' ', 'W', 'o','r', 'l', 'd']

let rev=val.reduce((prev,next)=>{
    return next+prev; 
})
console.log(rev);








// SORT

let arr1 = [10, 50, 30, 20, 40];

arr1.sort();
console.log(arr1);


let arr2 = [10, 8, 102, 105, 91, 82, 93, 7, 6, 95, 101];
arr2.sort(); // string sort
console.log(arr2);   //[10, 101, 102, 105, 6, 7, 8, 82, 91, 93,95]


// How to perform Numeric sort , sort(comaparator())
arr2.sort((a,b)=>a-b); // ascending outcome // if a-b is -ve dont do anything if its +ve swap it
arr2.sort((a,b)=>b-a); // ascending outcome
console.log(arr2);

