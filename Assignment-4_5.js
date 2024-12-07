function validateParentheses(sequence) {
    let stack = [];
    let pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

  
    for (let char of sequence) {
        if (char === '(' || char === '{' || char === '[') {
            
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
           
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

 
    return stack.length === 0;
}


let userInput = prompt("Enter a sequence of parentheses, brackets, and braces:");


let isValid = validateParentheses(userInput);


console.log(isValid);
