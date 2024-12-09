let arr1 = [10, 20];
let arr2 = arr1;   // Reference Copy 
// a new array is not being created, both the variables are sharing the same reference
arr2.push(30);
console.log(arr1, arr2);


let arr3 = [...arr1]; // Spread Operator : Copy elements by value (shallow copy)
// a new array gets created, the values from arr1 are copied to arr3 , newly created array address is stored in arr3
arr3.push(40);
console.log(arr1);
console.log(arr3);

let arr4 = [10, 20, [30, 31]];
// let arr5 = [...arr4]; // shallow copy
let arr5 = structuredClone(arr4); // Deep Copy
arr5.push(40); // 40 will be seen only in arr5 but not in arr4
arr5[2].push(32, 33); // 32,33 are seen 
console.log('arr4', arr4);
console.log('arr5', arr5);
// shallow copy : top level values are copied by value, nested arrays are sharing
// deep copy : top level values are copied by value, even nested elements are copied by value