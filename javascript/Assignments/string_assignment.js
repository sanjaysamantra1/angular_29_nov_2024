// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

let input1 = "entertainment";
function countCharacters(input) {
   let charCount = {};
   for (const char of input) {
      if (char in charCount) {
         charCount[char]++;
      } else {
         charCount[char] = 1;
      }
   }
   return charCount;
}
const output = countCharacters(input1);
console.log("output 1 ", output);


// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

let input2 = 'hello world';
function repeatedCharacters(input) {
   let elementStorage = {};
   for (const char of input) {
      if (char in elementStorage) {
         elementStorage[char]++;
      } else {
         elementStorage[char] = 1;
      }
   }
   let maxChar = null;
   let maxCount = 0;

   for (const char in elementStorage) {
      if (elementStorage[char] > maxCount) {
         maxChar = char;
         maxCount = elementStorage[char];
      }
   }
   return maxChar.toUpperCase();
}
const output2 = repeatedCharacters(input2);
console.log("output 2 ", output2);


// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let input3 = 'Hello World';
function switchCase(input) {
   let output3 = '';
   for (const char of input) {
      if (char === ' ') {
         output3 += char;
      } else if (char === char.toUpperCase()) {
         output3 += char.toLowerCase();
      } else {
         output3 += char.toUpperCase();
      }
   }
   return output3;
}
const output3 = switchCase(input3);
console.log("output 3 ", output3);


// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

let input4 = 'Rabindra Nath Tagore';
function abbrivationString(input) {
   let initials = '';
   let spliter = input4.split(' ');
   for (let i = 0; i <= spliter.length; i++) {
      if (i < spliter.length - 1) {
         initials += spliter[i].charAt(0) + '.' + ' ';
      } else {
         if (spliter[i] == undefined) {
            break;
         } else {
            initials += spliter[i].toLowerCase();
         }
      }
   }
   return initials;
}
const output4 = abbrivationString(input4);
console.log("output 4 ", output4);


// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'

let input5 = 'abcxyz';
function charShift(input) {
   let charChange = '';
   for (const char of input5) {
      if (char == 'z') {
         charChange += 'a'
      } else {
         charChange += String.fromCharCode(char.charCodeAt() + 1);
      }
   }
   return charChange;
}
const output5 = charShift(input5);
console.log("output 5 ", output5);


// 6. Ask user to enter a sequence of parantheses and validate
//    input: '([{ }])'
//    output : true

let input6 = '([{ }])';
function balancedParms(input) {
   const stack = [];
   const openBrackets = ['(', '[', '{'];
   const closeBrackets = [')', ']', '}'];
   const bracketPairs = { ')': '(', ']': '[', '}': '{' };
   for (let char of input) {
      if (openBrackets.includes(char)) {
         stack.push(char);
      } else if (closeBrackets.includes(char)) {
         if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
            return false;
         }
      }
   }
   return stack.length === 0;
}
const output6 = balancedParms(input6);
console.log("output 6 ", output6);



// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...

let input7 = 'ABC'
function permutations(input) {
   const result = [];
   for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const remainingChars = input.slice(0, i) + input.slice(i + 1);
      result.push(char + remainingChars);
   }
   return result;
}
const output7 = permutations(input7);
console.log("output 7 ", output7);

