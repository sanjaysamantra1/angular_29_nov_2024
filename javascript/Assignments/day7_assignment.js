/*1. Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....} */
function NoOfOccurences(str)  {
    let charCount = {};
    for (let i of str){
        if (charCount[i]) {
            charCount[i] += 1;
        } else {
            charCount[i] = 1;
        }
        
    }
    return charCount;
}
let ip='entertainment';
console.log(NoOfOccurences(ip));




/*2. Print the character which is repeated max no of times
   input: 'hello world'
   output : 'L'*/
   function getMaxRepeatedCharacter(str) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str.toLowerCase()) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
            if (charCount[char] > maxCount) {
                maxCount = charCount[char];
                maxChar = char;
            }
        }
    }

    return maxChar.toUpperCase(); 
}

const input = 'hello world';
const output = getMaxRepeatedCharacter(input);
console.log(output); 

  


/*3. Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD' */
   function swapCase(str) {
    let result = '';

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is uppercase, and convert it to lowercase, or vice versa
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

let ipstr = 'Hello World';
let op = swapCase(ipstr);
console.log(op); 


/*4. Print the Abbreviation for a string
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

/*5. Shift the characters by the next character
   input:  'abcxyz'
   output: 'bcdyza'*/
   function shiftCharacters(str) {
    let result = '';

    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            // Shift the character by one
            result += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (char >= 'A' && char <= 'Z') {
            // Handle uppercase letters
            result += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            // If it's not an alphabet character, leave it unchanged
            result += char;
        }
    }

    return result;
}

let ip2 = 'abcxyz';
let op2 = shiftCharacters(ip2);
console.log(op2); 


/*6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true */
 /*  function isValidParentheses(sequence) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let char of sequence) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char); // Push opening brackets to the stack
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== matchingBrackets[char]) {
                return false; // Mismatch found
            }
        }
    }

    return stack.length === 0; // If stack is empty, the sequence is balanced
}


const userInput = console.log("Enter a sequence of parentheses:");
const result = isValidParentheses(userInput);
console.log(result); // Output: true or false
*/

/*7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...*/
   /* function permute(word) {
        if (word.length === 1) return [word];
    
        const permutations = [];
        for (let i = 0; i < word.length; i++) {
            const currentChar = word[i];
            const remainingChars = word.slice(0, i) + word.slice(i + 1);
            const subPermutations = permute(remainingChars);
            for (let perm of subPermutations) {
                permutations.push(currentChar + perm);
            }
        }
        return permutations;
    }
    
    const usrIp = console.log("Enter a 3-letter word:");
    if (usrIp.length === 3) {
        const permutations = permute(usrIp);
        console.log(permutations.join(', '));
    } else {
        console.log("Please enter exactly 3 letters.");
    }*/
    