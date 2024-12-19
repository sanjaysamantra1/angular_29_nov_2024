// 1
function countCharacterOccurrences(input) {
    let frequency = {};
    for (let character of input) {
        frequency[character] = frequency[character] ? frequency[character] + 1 : 1;
    }
    return frequency;
}

let stringInput = 'entertainment';
let result = countCharacterOccurrences(stringInput);
console.log(result);


// 2
function mostFrequentCharacter(input) {
    let frequency = {};
    for (let character of input) {
        frequency[character] = frequency[character] ? frequency[character] + 1 : 1;
    }

    let maxChar = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
    return maxChar.toUpperCase();
}

stringInput = 'hello world';
result = mostFrequentCharacter(stringInput);
console.log(result);


// 3
function toggleCase(input) {
    return input.split('').map(character => 
        character === character.toLowerCase() ? character.toUpperCase() : character.toLowerCase()
    ).join('');
}

stringInput = 'Hello World';
result = toggleCase(stringInput);
console.log(result);


// 4
function generateAbbreviation(input) {
    let words = input.split(' ');
    let abbreviatedForm = words.map((word, index) => {
        if (index === words.length - 1) {
            return word.toLowerCase();
        } else {
            return word[0].toUpperCase() + '.';
        }
    }).join(' ');
    return abbreviatedForm;
}

stringInput = 'Rabindra Nath Tagore';
result = generateAbbreviation(stringInput);
console.log(result);


// 5
function shiftAlphabets(input) {
    return input.split('').map(character => {
        if (character >= 'a' && character <= 'z') {
            return character === 'z' ? 'a' : String.fromCharCode(character.charCodeAt(0) + 1);
        } else if (character >= 'A' && character <= 'Z') {
            return character === 'Z' ? 'A' : String.fromCharCode(character.charCodeAt(0) + 1);
        } else {
            return character;
        }
    }).join('');
}

stringInput = 'abcxyz';
result = shiftAlphabets(stringInput);
console.log(result);


// 6
function checkParenthesesValidity(input) {
    let stack = [];
    let matchingPairs = { ')': '(', '}': '{', ']': '[' };
    
    for (let character of input) {
        if (matchingPairs[character]) {
            if (stack.length === 0 || stack.pop() !== matchingPairs[character]) {
                return false;
            }
        } else if (['(', '{', '['].includes(character)) {
            stack.push(character);
        }
    }
    return stack.length === 0;
}

stringInput = '([{ }])';
result = checkParenthesesValidity(stringInput);
console.log(result);


// 7
function generatePermutations(input) {
    let permutationsList = [];
    
    function permuteArray(array, index = 0) {
        if (index === array.length) {
            permutationsList.push(array.join(''));
            return;
        }
        
        for (let i = index; i < array.length; i++) {
            [array[index], array[i]] = [array[i], array[index]];
            permuteArray(array, index + 1);
            [array[index], array[i]] = [array[i], array[index]];
        }
    }
    
    permuteArray(input.split(''));
    
    return permutationsList.join(', ');
}

stringInput = 'ABC';
console.log(generatePermutations(stringInput));
