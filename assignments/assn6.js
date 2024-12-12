// const str = "question please"

// let b = new String('99+99');

// console.log(typeof(b));
// console.log(typeof(str));

// let c = b.valueOf();
// console.log(typeof(c));


// // After discussion

// const d = '3+9';

// console.log(eval(d));


// ----------------------------------TASK - 1---------------------------

//1. Print the occurence of each character in a string
// input: 'entertainment'
// output: { e:3 , n:2 , t: 3 ....}



const occurence = (q) => {
    const result = {};
    for(let i = 0 ; i < q.length ;i++ ){

        const char = q[i];
        if(result[char]){
            result[char]++
        }else{
            result[char] = 1
        }
    }

    return result
}

console.log(occurence('Bharath'))


//----------------------------------TASK - 2----------------------------------

// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

const repeatMax = (q) => {
    const result = {};
    const max = 0 ;
    for(let i = 0 ; i < q.length ;i++ ){

        const char = q[i];
        if(result[char]){
            result[char]++
        }else{
            result[char] = 1
        }
    }

    return result
}


const maxChar = (abc) => {
const occurence = repeatMax(abc);
let max = 0 ;
let output = '';

for(key in occurence){
    if(occurence[key] > max){
        max = occurence[key];
        output = [key]
    }


}
return output ;
}

console.log(maxChar('Bharath'));





// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

const invertCase = (abc) => {
    let result = '';
    for (let i = 0; i < abc.length; i++) {
        const char = abc[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
};


console.log(invertCase('LooK whos checkinG'));



// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

const getAbbreviation = (input) => {
    const words = input.split(' ');
    let result = '';
    for (let i = 0; i < words.length -1; i++) {
        result += words[i][0].toUpperCase() + '. ';
    }
    result += words[words.length - 1].toLowerCase();
    return result;
};

// Test
console.log(getAbbreviation('Lord Rafael Godse'));



// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'
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

// 6. Ask user to enter a sequence of parantheses and validate 
//    input: '([{ }])'
//    output : true

const orderedP = (abc) => {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (let char of abc) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(orderedP('([{ }])')); 
console.log(orderedP('([{}]))')); 


// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...

let input3 = 'ABC';
let result3 = [];

for (let i = 0; i < input3.length; i++) {
    for (let j = 0; j < input3.length; j++) {
        for (let k = 0; k < input3.length; k++) {
            if (i !== j && i !== k && j !== k) {
                result3.push(input3[i] + input3[j] + input3[k]);
            }
        }
    }
}

console.log(result3.join(", "));