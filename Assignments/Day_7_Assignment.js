//1. Print the occurence of each character in a string
const input = 'entertainment';
const output = {};
for (let char of input) {
    output[char] = (output[char] || 0) + 1;
}
console.log(output);

//2. Print the character which is repeated max no of times
const input1 = 'hello world';
const output2 = {};
for (let char of input) {
    if (char !== ' ') {
        output[char] = (output[char] || 0) + 1;
    }
}
let maxChar = '';
let maxCount = 0;
for (let char in output) {
    if (output[char] > maxCount) {
        maxCount = output[char];
        maxChar = char;
    }
}
console.log(maxChar.toUpperCase());
 
//3. Swap The case for Each Character in a string 
const input3 = 'Hello World';
const output3 = input.split('').map(char => 
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
).join('');
console.log(output);  

//4. Print the Abbreviation for a string
const input4 = 'Rabindra Nath Tagore';
const words = input.split(' ');
const abbreviation = words.map((word, index) => 
    index === words.length - 1 ? word.toLowerCase() : word[0].toUpperCase() + '.'
).join(' ');
console.log(abbreviation);
 
//5. Shift the characters by the next character 
const input5 = 'abcxyz';
const output5 = input.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) + 1)
).join('');
console.log(output);

//6. Ask user to enter a sequence of parantheses and validate 
const input6 = '([{ }])';
const stack = [];
for (let char of input) {
    if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
    } else if (char === ')' && stack[stack.length - 1] === '(' ||
               char === '}' && stack[stack.length - 1] === '{' ||
               char === ']' && stack[stack.length - 1] === '[') {
        stack.pop();
    } else {
        console.log(false);
        return;
    }
}
console.log(stack.length === 0);

//7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
const input7 = 'ABC';
function getPermutations(str) {
    if (str.length <= 1) return [str];
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const permutations = getPermutations(remainingChars);
        for (let perm of permutations) {
            result.push(char + perm);
        }
    }
    return result;
}
console.log(getPermutations(input).join(', '));


 