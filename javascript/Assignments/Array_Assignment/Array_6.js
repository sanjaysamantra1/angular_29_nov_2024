const inputArr = [ 
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];

// Initialize an empty array to hold words and a temporary variable for the current word
const output = [];
let currentWord = '';

// Iterate through the input array
inputArr.forEach(letter => {
    if (letter === '') {
        // Push the current word to the output array if it's not empty
        if (currentWord) {
            output.push(currentWord);
            currentWord = ''; // Reset current word for the next word
        }
    } else {
        // Append the letter to the current word
        currentWord += letter;
    }
});

// Add the last word if it exists
if (currentWord) {
    output.push(currentWord);
}

console.log(output); // Output: ['bake', 'cake', 'eat']
