let input = [10, 20, 30, 40, 50, 10, 30, 50];
let output = {};

// Iterate through the array
input.forEach(element => {
    // If the element already exists in the object, increment its count
    if (output[element]) {
        output[element]++;
    } else {
        // Otherwise, initialize its count to 1
        output[element] = 1;
    }
});

console.log(output); 
