// 6. Ask user to enter a sequence of parantheses and validate 
//    input: '([{ }])'
//    output : true

function validateParentheses(inputStr) {
    let stack = [];
    const matchingParentheses = { ')': '(', '}': '{', ']': '[' };
    for (let char of inputStr) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

const inputStr = '([{ }])';
console.log(validateParentheses(inputStr));
