// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

function swapCase(inputStr) {
    return inputStr.split('')
                   .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
                   .join('');
}

const inputStr = 'Hello World';
console.log(swapCase(inputStr));
