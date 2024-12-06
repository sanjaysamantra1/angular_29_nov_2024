//1. Print the occurrence of each character in a string
let input1 = 'entertainment';
let occurrences = {};

for (char of input1) {
    occurrences[char] = (occurrences[char] || 0) + 1;
}

console.log(occurrences);

//Print the character which is repeated the maximum number of times
let str1 = 'hello world';
let count = {};

for (char of str1.toLowerCase()) {
    if (char !== ' ') count[char] = (count[char] || 0) + 1;
}

let maxChar = '';
let maxCount = 0;

for (key in count) {
    if (count[key] > maxCount) {
        maxCount = count[key];
        maxChar = key;
    }
}

console.log(maxChar.toUpperCase()); // Output: 'L'

//Swap the case for each character in a string

let str2 = 'Hello World';
let swapped = '';

for (char of str2) {
    swapped += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}
console.log(swapped); // Output: 'hELLO wORLD'
//Print the abbreviation for a string
let name = 'Rabindra Nath Tagore';
let words = name.split(' ');
let abbreviation = '';

for (let i = 0; i < words.length - 1; i++) {
    abbreviation += words[i][0].toUpperCase() + '. ';
}

abbreviation += words[words.length - 1].toLowerCase();
console.log(abbreviation); // Output: 'R. N. tagore'

//Shift the characters by the next character
let str3 = 'abcxyz';
let shifted1 = '';

for (char of str3) {
    let code = char.charCodeAt(0);
    if (char === 'z') {
        shifted1 += 'a';
    } else if (char === 'Z') {
        shifted1 += 'A';
    } else {
        shifted1 += String.fromCharCode(code + 1);
    }
}

console.log(shifted1); // Output: 'bcdyza'

//Shift the characters by the next character

let str = 'abcxyz';
let shifted = '';

for (char of str) {
    let code = char.charCodeAt(0);
    if (char === 'z') {
        shifted += 'a';
    } else if (char === 'Z') {
        shifted += 'A';
    } else {
        shifted += String.fromCharCode(code + 1);
    }
}
console.log(shifted); // Output: 'bcdyza'

//Validate parentheses
let input2 = '([{ }])';
let stack2 = [];
let isValid = true;

let pairs2 = {
    ')': '(',
    '}': '{',
    ']': '['
};

for (char of input2) {
    if (char === '(' || char === '{' || char === '[') {
        stack2.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
        if (stack2.pop() !== pairs2[char]) {
            isValid = false;
            break;
        }
    }
}
isValid = isValid && stack2.length === 0;
console.log(isValid); // Output: true

//Validate parentheses
let input = '([{ }])';
let stack = [];
let isValid2 = true;

let pairs = {
    ')': '(',
    '}': '{',
    ']': '['
};

for (char of input) {
    if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
        if (stack.pop() !== pairs[char]) {
            isValid2 = false;
            break;
        }
    }
}

isValid2 = isValid2 && stack.length === 0;
console.log(isValid2); // Output: true

//Print all permutations of a 3-letter word
let word = 'ABC';

function permute(str, prefix = '') {
    if (str.length === 0) {
        console.log(prefix);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let remaining = str.slice(0, i) + str.slice(i + 1);
        permute(remaining, prefix + str[i]);
    }
}

permute(word);
// Output: ABC, ACB, BAC, BCA, CAB, CBA

