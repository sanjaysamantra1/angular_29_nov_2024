/*6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true */
   function isValidParentheses(sequence) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let char of sequence) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char); // Push opening brackets to the stack
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== matchingBrackets[char]) {
                return false; // Mismatch found
            }
        }
    }

    return stack.length === 0; // If stack is empty, the sequence is balanced
}


const userInput = console.log("Enter a sequence of parentheses:");
const result = isValidParentheses(userInput);
console.log(result); // Output: true or false
