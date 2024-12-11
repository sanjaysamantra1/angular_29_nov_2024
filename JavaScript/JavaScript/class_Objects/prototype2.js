// <!-- <script>
//     let cars = ['tata', 'honda']; // 'cars' is an object of Array class
//     console.log(cars);


    
//         class Array{
//             static isArray(){
//             }
//             static from(){
//             }
//         }
//         Array.prototype.push = function(){
//         }
//         Array.prototype.pop = function(){
//         }
//         Array.prototype.shift = function(){
//         }
//         Array.prototype.unshift = function(){
//         }
    
    
// </script> -->



// let obj1 = { a: 10, b: 20 }
// let obj2 = { c: 30, d: 40 }
// let obj3 = { e: 50 }
// // assign(target , source1,source2,...)
// // data will be added to obj1
// Object.assign(obj1, obj2, obj3);
// console.log('Obj1: ', obj1); // { a: 10, b: 20, c: 30, d: 40, e: 50 }
// console.log('Obj2: ', obj2); // { c: 30, d: 40 }
// console.log('Obj3: ', obj3); // { e: 50 }


// let user1 = { name: 'sanjay', age: 55, add: 'bangalore' };
// let user2 = user1;  // Reference Copy
// let user3 = Object.assign({}, user1); // shalllow copy
// let user4 = { ...user1 }; // shallow copy
// let user5 = structuredClone(user1); // Deep Copy
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);





    // let obj1 = { a: 10, b: 20 };
    // let obj2 = Object.create(obj1);

    // console.log('obj1: ', obj1); // { a: 10, b: 20 }
    // console.log('obj2: ', obj2); // {}

    // console.log('obj1 ', obj1.a, obj1.b); // 10 20
    // console.log('obj2 ', obj2.a, obj2.b); // 10 20

    // obj1.a = 15;
    // obj2.b = 25; // obj2 adds a direct property 'b' with value 25

    // console.log('obj1 ', obj1.a, obj1.b); // 15 20
    // console.log('obj2 ', obj2.a, obj2.b); // 15 25

    // // when an object literal has both direct property and prototype property with the same name, how can we access prototype property?
    // console.log('obj2 ', obj2.a, obj2.__proto__.b); // 15 20



