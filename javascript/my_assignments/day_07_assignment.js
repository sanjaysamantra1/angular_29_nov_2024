// 1. Print occurrence of each character in a string
let str1 = 'entertainment';
let charCount = {};
for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
}
console.log(charCount);

// 2. Print character repeated max times
let str2 = 'hello world';
let maxChar = '';
let maxCount = 0;
let charMap = {};

for (let char of str2.toLowerCase()) {
    charMap[char] = (charMap[char] || 0) + 1;
    if (charMap[char] > maxCount) {
        maxCount = charMap[char];
        maxChar = char;
    }
}
console.log(maxChar.toUpperCase());

// 3. Swap case for each character
let str3 = 'Hello World';
let swappedStr = '';
for (let char of str3) {
    swappedStr += char === char.toUpperCase() ? 
                  char.toLowerCase() : 
                  char.toUpperCase();
}
console.log(swappedStr);

// 4. Print abbreviation
let str4 = 'Rabindra Nath Tagore';
let words = str4.split(' ');
let abbr = words.slice(0, -1).map(word => word[0].toUpperCase() + '.').join(' ') 
          + ' ' + words[words.length - 1].toLowerCase();
console.log(abbr);

// 5. Shift characters to next
let str5 = 'abcxyz';
let shifted = '';
for (let i = 0; i < str5.length; i++) {
    shifted += (i === str5.length - 1) ? str5[0] : str5[i + 1];
}
console.log(shifted);

// 6. Validate parentheses
function validateParentheses(str) {
    let stack = [];
    let pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of str) {
        if ('([{'.includes(char)) {
            stack.push(char);
        } else if (')]}'.includes(char)) {
            if (char !== pairs[stack.pop()]) return false;
        }
    }
    return stack.length === 0;
}
console.log(validateParentheses('([{}])'));

// 7. Print permutations of 3 letters
function getPermutations(str) {
    let results = [];
    if (str.length === 1) return [str];
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const innerPermutations = getPermutations(remainingChars);
        
        for (let perm of innerPermutations) {
            results.push(char + perm);
        }
    }
    return results;
}
console.log(getPermutations('ABC'));
