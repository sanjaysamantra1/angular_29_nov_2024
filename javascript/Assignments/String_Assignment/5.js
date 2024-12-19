// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'

function shiftCharacters(inputStr) {
    return inputStr.split('')
                   .map(char => {
                       if (/[a-z]/.test(char)) {
                           return String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
                       } else if (/[A-Z]/.test(char)) {
                           return String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
                       }
                       return char;
                   })
                   .join('');
}

const inputStr = 'abcxyz';
console.log(shiftCharacters(inputStr));
