<<<<<<< HEAD

function charOccurence(word) {
    const res = {};
    for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);
        res[ch] = (res[ch] || 0) + 1;
    }
    return res;
}
console.log(charOccurence('entertainment'));

//2.
 function maxOccurrence(str) {
    let maxChar = '';
    let count = 0;
    const occurrences = {};
    str = str.toLowerCase(); 
    
    for (let i = 0; i < str.length; i++) { // parsing through the character occurences
        let char = str.charAt(i);
        occurrences[char] = (occurrences[char] || 0) + 1;
    }
    for (const char in occurrences) {
        if (occurrences[char] > count) {
            count = occurrences[char];
            maxChar = char;
        }
    }

    return maxChar.toUpperCase(); 
}

console.log(maxOccurrence('hello world'));

//3. 

 function swapCase(word) {
    let res1 = '';
    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (char === char.toLowerCase()) {
            res1 += char.toUpperCase();
        } else {
            res1 += char.toLowerCase();
        }
    }
    return res1;
}

console.log(swapCase('Hello World'));

//.4

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
console.log(getAbbreviation('Rabindra Nath Tagore'));

// 5. 

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


// 6. 

function parenthesesValidate(str) {
    const list = [];
    const dict = { ')': '(', ']': '[', '}': '{' };
    
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        
        if ('([{'.includes(char)) {
            list.push(char); // Pushes the opening parenthesis to the list
        
        } else if (')]}'.includes(char)) {
            if (list.pop() !== dict[char]) // If the list is empty or opening parenthesis doesn't match the closing one, then returns false
                return false;
        }
    }
    return list.length === 0;
}

//let input = prompt('Enter the paranthesis:')

console.log(parenthesesValidate('([{ }])'))
console.log(parenthesesValidate('([{ }'))

//7. 

const input6= 'ABC';
const len = input6.length;
let output3= []
for(let first of input6){
    for(let second of input6){
        for(let third of input6){
            output3.push(first+second+third);
        }
    }
}
=======

function charOccurence(word) {
    const res = {};
    for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);
        res[ch] = (res[ch] || 0) + 1;
    }
    return res;
}
console.log(charOccurence('entertainment'));

//2.
 function maxOccurrence(str) {
    let maxChar = '';
    let count = 0;
    const occurrences = {};
    str = str.toLowerCase(); 
    
    for (let i = 0; i < str.length; i++) { // parsing through the character occurences
        let char = str.charAt(i);
        occurrences[char] = (occurrences[char] || 0) + 1;
    }
    for (const char in occurrences) {
        if (occurrences[char] > count) {
            count = occurrences[char];
            maxChar = char;
        }
    }

    return maxChar.toUpperCase(); 
}

console.log(maxOccurrence('hello world'));

//3. 

 function swapCase(word) {
    let res1 = '';
    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (char === char.toLowerCase()) {
            res1 += char.toUpperCase();
        } else {
            res1 += char.toLowerCase();
        }
    }
    return res1;
}

console.log(swapCase('Hello World'));

//.4

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
console.log(getAbbreviation('Rabindra Nath Tagore'));

// 5. 

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


// 6. 

function parenthesesValidate(str) {
    const list = [];
    const dict = { ')': '(', ']': '[', '}': '{' };
    
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        
        if ('([{'.includes(char)) {
            list.push(char); // Pushes the opening parenthesis to the list
        
        } else if (')]}'.includes(char)) {
            if (list.pop() !== dict[char]) // If the list is empty or opening parenthesis doesn't match the closing one, then returns false
                return false;
        }
    }
    return list.length === 0;
}

//let input = prompt('Enter the paranthesis:')

console.log(parenthesesValidate('([{ }])'))
console.log(parenthesesValidate('([{ }'))

//7. 

const input6= 'ABC';
const len = input6.length;
let output3= []
for(let first of input6){
    for(let second of input6){
        for(let third of input6){
            output3.push(first+second+third);
        }
    }
}
>>>>>>> origin/main
console.log(output3);