/*Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore' */
   function getAbbreviation(str) {
    let words = str.split(' '); // Split the string into words
    let result = '';

    for (let i = 0; i < words.length; i++) {
        if (i < words.length - 1) {
            // Take the first letter of the first two words, capitalize it, and add a period
            result += words[i][0].toUpperCase() + '. ';
        } else {
            // Add the last word as it is (in lowercase)
            result += words[i].toLowerCase();
        }
    }

    return result.trim(); // Remove any extra spaces
}

// Example usage
let ipstr1 = 'Rabindra Nath Tagore';
let op1 = getAbbreviation(ipstr1);
console.log(op1); // Output: 'R. N. tagore'
