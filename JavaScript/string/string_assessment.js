// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

let s = 'entertainment';
let s1={};

for(let i=0;i<s.length;i++){
    if(!s1[s.charAt(i)]){
        
        let count=1;
        for(let j=i+1;j<s.length;j++){
            if(s.charAt(i)===s.charAt(j)){
                count++;
            }
        }
    
            console.log(`${s.charAt(i)}:${count}`);
            s1[s.charAt(i)]= true;
    }
    
}

// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'


let a = "hello world";
let val = 0;
let max = 0; 
let a1 = {a}; 
// console.log(!a1[a.charAt(0)]); //true

for (let i = 0; i < a.length; i++) {
    if (!a1[a.charAt(i)] && a.charAt(i) !== ' ') { 
        let count = 1; // Initialize count for current character
        for (let j = i + 1; j < a.length; j++) {
            if (a.charAt(i) === a.charAt(j)) {
                count++;
            }
        }
        if (count > max) {
            max = count; 
            val = i; 
        }
        a1[a.charAt(i)] = true; // Mark the character as processed
    }
}

console.log(a.charAt(val).toUpperCase()); 




// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let b = "Hello World"; 
let result = ""; 


for (let i = 0; i < b.length; i++) {
    let char = b.charAt(i); 

    if (char === char.toUpperCase()) {
        result += char.toLowerCase(); 
    } else {
        result += char.toUpperCase(); 
    }
}

console.log(result); 


// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

let input = "Rabindra Nath Tagore"; 
let words = input.split(" "); 
let res = ""; 
// console.log(words); //[ 'Rabindra', 'Nath', 'Tagore' ]

for (let i = 0; i < words.length; i++) {
    if (i < words.length - 1) {
        res += words[i][0].toUpperCase() + ". "; 
    } else {
        res += words[i].toLowerCase(); 
    }
}

console.log(res); 




// 5. Shift the characters by the next character
//    input:  'abcxy '
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



let input2 = '([{ }])';
let stack = []; 

for (let char of input2) {
    if (char === '(' || char === '{' || char === '[') {
        stack.push(char); 
    } else if (char === ')') {
        if (stack.pop() !== '(') {
            console.log(false); 
            return; 
        }
    } else if (char === '}') {
        if (stack.pop() !== '{') {
            console.log(false);
            return; 
        }
    } else if (char === ']') {
        if (stack.pop() !== '[') {
            console.log(false); 
            return; 
        }
    }
}

console.log(stack.length === 0); 



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
