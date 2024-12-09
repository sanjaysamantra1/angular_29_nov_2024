// REFERENCE COPY
let arr1 = [10, 20, 30];

let arr2 = arr1;
arr2.push(100);
console.log(arr2);
console.log(arr1);

// SHALLOW COPY
let arr3 = [10, 20, [40, 50]];

let arr4 = [...arr3];

arr4.push(1000);

// pushed to arr4 only not arr3
console.log(`arr3: ${arr3} - arr4: ${arr4}`);

//pushing to sub arrays
arr4[2].push(60);

// pushed to sub array of arr4, which pushes to both arr3 & arr4
console.log(`arr3: ${arr3} - arr4: ${arr4}`);

// DEEP COPY

arr5 = [10, 20, 40, [60, 70]];

arr6 = structuredClone(arr5);

arr6.push(100);
arr6[3].push(10000);

console.log(`arr5: ${arr5} - arr6: ${arr6}`);
