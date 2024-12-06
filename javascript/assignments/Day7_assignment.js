// 1. Print the occurence of each character in a string
// input: 'entertainment'
// output: { e:3 , n:2 , t: 3 ....}

const charOccurrence = (str) => {
  const result = {};
  for (const char of str) {
    if (result[char]){
      result[char] += 1
    } else (result[char]) = 1;
  }
  return result;
};

console.log(charOccurrence("entertainment"));


// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

const maxRepeatedChar = (str) => {
  const charCounts = {};

  for (const char of str.toLowerCase()) {
    if (char != " ") {
      if (charCounts[char] == undefined) {
        charCounts[char] = 1;
      } else {
        charCounts[char] += 1;
      }
    }
  }

  let maxChar = null;
  let maxCount = 0;

  for (const char in charCounts) {
    if (charCounts[char] > maxCount) {
      maxChar = char;
      maxCount = charCounts[char];
    }
  }

  return maxChar.toUpperCase();
};

console.log(maxRepeatedChar("hello world"));


// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

const swapEachChar = (str) => {
  return str.split("").map((char) =>
      char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
};

console.log(swapEachChar("Hello World"));


// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

const abbreviation = (str) => {
  const words = str.split(" "); 
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i < words.length - 1) {
      result += words[i][0].toUpperCase() + ". ";
    } else {
      result += words[i].toLowerCase();
    }
  }

  return result.trim();
};

console.log(abbreviation("Rabindra Nath Tagore"));


// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'

const shiftChars = (str) => {
  let result = "";

  for (const char of str) {
    if (char == "z") {
      result += "a";
    } else if (char == "Z") {
      result += "A";
    } else {
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    }
  }

  return result;
};

console.log(shiftChars("abcxyz")); // Output: 'bcdyza'


// 6. Ask user to enter a sequence of parantheses and validate 
//    input: '([{ }])'
//    output : true

const checkParenthesis = (str) => {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };

  for (const char of str) {
    if ("([{".includes(char)) {
      stack.push(char);
    } else if (")]}".includes(char)) {
      if (stack.pop() != pairs[char]) 
        return false;
    }
  }

  return stack.length == 0;
};

console.log(checkParenthesis("([{ }])"));
console.log(checkParenthesis("([{})]"));


// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...

const getPermutations = (str) => {
  if (str.length === 1) return [str];

  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = getPermutations(remaining);

    for (const subPerm of subPermutations) {
      permutations.push(char + subPerm);
    }
  }
  return permutations;
};

console.log(getPermutations("ABC").join(", "));
