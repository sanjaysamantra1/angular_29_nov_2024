let arr1 = [10, 50, 30, 20, 40];
arr1.sort();
console.log(arr1); // [ 10, 20, 30, 40, 50 ]

let arr2 = [10, 8, 102, 105, 91, 82, 93, 7, 6, 95, 101];
arr2.sort();   // string sort
console.log(arr2);

// How to perform Numeric sort , sort(comaparator())
// arr2.sort((a,b)=>a-b);  // ascending
arr2.sort((a, b) => b - a);  // descending
console.log(arr2);
