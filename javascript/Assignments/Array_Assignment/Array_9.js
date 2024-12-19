let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

// Convert array2 to a Set for faster lookup
let set2 = new Set(array2);

// Find the intersection of array1 and array2
let intersection = array1.filter(value => set2.has(value));

console.log(intersection); // Output: [4, 5]
