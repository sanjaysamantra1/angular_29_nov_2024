console.log(Math.max(10, 20, 30, 40)); // 30

let arr = [10, 20, 30];
console.log(Math.max(arr)); // NaN

// break an array in to individual values and pass the values to a function
console.log(Math.max.apply({}, arr)); // 30

// spread Operator : break an array in to individual values 
console.log(Math.max(...arr)); // 30