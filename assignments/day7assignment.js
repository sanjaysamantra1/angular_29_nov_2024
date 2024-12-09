// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

let inputString = 'entertainment';
let outputMap = {};
for (let index in inputString) {
    if (inputString[index] in outputMap) {
        outputMap[inputString[index]] += 1;
    } else {
        outputMap[inputString[index]] = 1;
    }
}

console.log(outputMap);

// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'
let inputString1 = 'hello world';
let outputMap1 = {};
let max = 0;
let key_max = '';
for (let index in inputString1) {
    if (inputString1[index] in outputMap1) {
        outputMap1[inputString1[index]] += 1;

        if (max < outputMap1[inputString1[index]]) {
            max = outputMap1[inputString1[index]];
            key_max = inputString1[index];
        }
    } else {
        outputMap1[inputString1[index]] = 1;
    }
}

console.log(`2. Ans: ${max}, ${key_max}`);

// 3. Swap The case for Each Character in a string
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let input3 = 'Hello World';
let output3 = '';

for (let char of input3) {
    if (char >= 'a' && char <= 'z') {
        output3 += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
        output3 += char.toLowerCase();
    }
}

console.log(`3. Ans: ${output3}`);

// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

let input4 = 'Rabindra Nath Hello    Tagore';
let output4 = '';

let inputArr = input4.split(" ");
let lastElement = inputArr[inputArr.length - 1];

for (let word of inputArr.slice(0, inputArr.length - 1)) {
    if (word != '') {
        output4 += word.charAt(0) + '. ';
    }
}
output4 += lastElement
console.log(`4. Ans: ${output4}`);

// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'
let input5 = 'abcxyz';
let output5 = '';

for (let character of input5) {
    if (character == 'z') {
        output5 += 'a';
    } else {
        let ascii_value = character.charCodeAt(0);
        let next_character = String.fromCharCode(ascii_value + 1);
        output5 += next_character;
    }
}
console.log(`5 ans: ${output5}`);

// 6. Ask user to enter a sequence of parantheses and validate
//    input: '([{ }])'
//    output : true

let input6 = '([{ a }])';
let output6 = false;
let stack = [];
let top = -1;
for (let symbol of input6) {
    if (stack.length == 0) {
        stack.push(symbol);
        top++;
    }
    else if (top >= 0 && ((stack[top] == '(' && symbol == ')') || (stack[top] == '[' && symbol == ']') || (stack[top] == '{' && symbol == '}'))) {
        stack.pop();
    }
}

if (stack.length == 0) {
    output6 = true;
}

console.log(`6 Ans: ${output6}`);
// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...

let input7 = 'ABC'
let output7 = ''
function permute(str, result) {
    if (str.length == 0) {
        return console.log(result);
    }
    else {
        for (let i = 0; i < str.length; i++) {
            console.log('loop started')
            let med = str.substring(0, i) + str.substring(i + 1);
            console.log(`i val: ${i} med: ${med}, result: ${result} ${str[i]}`);
            permute(med, result + str[i]);
            console.log('loop done')
        }
    }
}

permute(input7, output7);
console.log(output7);