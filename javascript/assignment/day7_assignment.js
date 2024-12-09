// 1. Print the occurrence of each character
let inputText1 = 'entertainment';
let charFrequency = {};

for (let character of inputText1) {
    charFrequency[character] = (charFrequency[character] || 0) + 1;
}

console.log(charFrequency); 

// 2. Character repeated the maximum number of times
let inputText2 = 'hello world';
let charCountMap = {};
let mostFrequentChar = '';

for (let character of inputText2.toLowerCase()) {
    if (character !== ' ') { 
        charCountMap[character] = (charCountMap[character] || 0) + 1;

        if (!mostFrequentChar || charCountMap[character] > charCountMap[mostFrequentChar]) {
            mostFrequentChar = character;
        }
    }
}

console.log(mostFrequentChar.toUpperCase()); 

// 3. Swap case for each character
let inputText3 = 'Hello World';
let swappedCaseText = [...inputText3]
    .map(character => character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase())
    .join('');

console.log(swappedCaseText); 

// 4. Print abbreviation
let inputText4 = 'Rabindra Nath Tagore';
let nameWords = inputText4.split(' ');

let abbreviation = nameWords
    .slice(0, -1) // All except the last word
    .map(word => word[0].toUpperCase() + '.')
    .join(' ') + ' ' + nameWords.at(-1).toLowerCase();

console.log(abbreviation); 

// 5. Shift characters to the next
let inputText5 = 'abcxyz';
let shiftedText = [...inputText5]
    .map(character => String.fromCharCode(((character.charCodeAt(0) - 97 + 1) % 26) + 97))
    .join('');

console.log(shiftedText); 

// 6. Validate parentheses
function validateParentheses(sequence) {
    let stack = [];
    let matchingPairs = { ')': '(', ']': '[', '}': '{' };

    for (let char of sequence) {
        if (Object.values(matchingPairs).includes(char)) {
            stack.push(char);
        } else if (matchingPairs[char]) {
            if (stack.pop() !== matchingPairs[char]) return false;
        }
    }

    return stack.length === 0;
}

console.log(validateParentheses('([{}])')); 

// 7. Generate permutations of 3 letters
function generatePermutations(inputText) {
    if (inputText.length === 1) return [inputText];

    return [...inputText].flatMap((character, index) =>
        generatePermutations(inputText.slice(0, index) + inputText.slice(index + 1))
            .map(permutation => character + permutation)
    );
}

console.log(generatePermutations('ABC')); 
