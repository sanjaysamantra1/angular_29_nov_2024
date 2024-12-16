// 1. Print the occurrence of each character
let inputText1 = 'entertainment';
let charFrequency = {};

for (let character of inputText1) {
    if (charFrequency[character]) {
        charFrequency[character] += 1;
    } else {
        charFrequency[character] = 1;
    }
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
let swappedCaseText = '';

for (let i = 0; i < inputText3.length; i++) {
    let character = inputText3[i];
    // Swap case: If uppercase, make it lowercase, else make it uppercase
    swappedCaseText += character === character.toUpperCase() 
        ? character.toLowerCase() 
        : character.toUpperCase();
}

console.log(swappedCaseText);


// 4. Print abbreviation
let inputText4 = 'Rabindra Nath Tagore';
let nameWords = inputText4.split(' ');

let abbreviation = '';
for (let i = 0; i < nameWords.length - 1; i++) {
    abbreviation += nameWords[i][0].toUpperCase() + '. ';
}
abbreviation += nameWords[nameWords.length - 1].toLowerCase();

console.log(abbreviation);


// 5. Shift characters to the next
let input1 = "abcxy "; 
let result1 = ""; 
let alphabet = "abcdefghijklmnopqrstuvwxyz"; 

// console.log(input1[1]); //b
// console.log(input1.charAt(1)); // b


for (let i = 0; i < input1.length; i++) {
    let char = input1[i]; 

    if (char === " ") {
        result1 += " "; 
    } else {
       
        let index1 = alphabet.indexOf(char);
        result1 += index1 === 25 ? "a" : alphabet[index1 + 1]; 
    }
}

console.log(result1);
