// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

// 3. Swap The case for Each Character in a string
//    input: 'Hello World'
//    output: 'hELLO wORLD'

// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'

// 6. Ask user to enter a sequence of parantheses and validate
//    input: '([{ }])'
//    output : true

// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...

let result = {};
let input = "entertainment";
for (let val of input) {
  if (result[val] != null) {
    result[val] = result[val] + 1;
    console.log(val);
  } else {
    result[val] = 1;
    console.log(val);
  }
}
console.log(result);

//input: 'hello world'
//output : 'L'

let output = {};
let input1 = "hello world";
for (let val1 of input1) {
  if (output[val1] != null) {
    output[val1] = output[val1] + 1;
    console.log(val1);
  } else {
    output[val1] = 1;
    console.log(val1);
  }
}

let counter1 = 0;
let outValue;
for (let key in output) {
  if (output[key] > counter1) {
    counter1 = output[key];
    outValue = key;
  }
}
console.log(`most repqated character is ${outValue}`);

// // 3. Swap The case for Each Character in a string
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let str1 = "Hello World";
let str2 = "";
for (let char of str1) {
  if (char === char.toLowerCase() && char !== char.toUpperCase()) {
    str2 += char.toUpperCase();
  } else {
    str2 += char.toLowerCase();
  }
}
console.log(`OG string: ${str1}, Altered String: ${str2}`);

// input: 'Rabindra Nath Tagore'
//     output: 'R. N. tagore'

let demoString = "Rabindra Nath    Tagore";

let name = "Rabindra Nath     Tagore";
let parts = name.split(" ");

let initials = "";

for (let i = 0; i < parts.length - 1; i++) {
  initials += parts[i][0] + ". ";
}

let lastName = parts[parts.length - 1];
let shortName = initials + lastName;

console.log(shortName);



// 6. Ask user to enter a sequence of parantheses and validate
//    input: '([{ }])'
//    output : true

let arInput='([{ }])';
let stack=[];

let check = { 
  ')': '(',
  ']': '[',
  '}': '{'
};

