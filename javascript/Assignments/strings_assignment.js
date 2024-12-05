/*1. Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....}
*/

function charOccurence(word) {
    const res = {};
    for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);
        res[ch] = (res[ch] || 0) + 1;
    }
    return res;
}
console.log(charOccurence('entertainment'));

/*--------------------------------------------------------------------------
2. Print the character which is repeated max no of times
   input: 'hello world'
   output : 'L'
*/
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

/*------------------------------------------------------------------------
3. Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD'
*/

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


/*--------------------------------------------------------------------
4. Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore'
*/

function abbreviation(str) {
    const word = str.split(' ');
    let res2 = '';
    for (let i = 0; i < word.length; i++) {
        res2 = i < word.length - 1 
            ? res2.concat(word[i].charAt(0).toUpperCase(), '. ')
            : res2.concat(word[i].toLowerCase());
    }
    return res2;
}

console.log(abbreviation('Rabindra Nath Tagore')); 


/*------------------------------------------------------------------------
5. Shift the characters by the next character
   input:  'abcxyz'
   output: 'bcdyza'
*/

function charShift(str) {
    let res3 = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        
        if (char === 122) {
            res3 += 'a'; 
        } else if (char === 90) {
            res3 += 'A'; 
        } else {
            res3 += String.fromCharCode(char + 1); 
        }
    }
    return res3;
}

console.log(charShift('abcxyz')); 
console.log(charShift('wxya'));

/*-----------------------------------------------------------------------
6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true
*/

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

//const userInput = prompt("Enter a sequence of parentheses (e.g. '([{ }])'):");
//console.log(parenthesesValidate(userInput));
//console.log(parenthesesValidate('([{ }])')); 
//console.log(parenthesesValidate('([}]'));    



/*----------------------------------------------------------------------------
7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...
*/

function permutation(str) {
    const res4 = [];

    function permute(arr, current = '') {
        if (arr.length === 0) {
            res4.push(current); 
        } else {
            for (let i = 0; i < arr.length; i++) {
                const char = arr[i];
                const remainingArr = arr.slice(0, i).concat(arr.slice(i + 1)); 
                permute(remainingArr, current + char); 
            }
        }
    }

    permute(str.split('')); 
    return res4;
}

console.log(permutation('ABC').join(', '));

