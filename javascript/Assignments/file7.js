/*5. Shift the characters by the next character
   input:  'abcxyz'
   output: 'bcdyza'*/
   function shiftCharacters(str) {
    let result = '';

    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            // Shift the character by one
            result += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (char >= 'A' && char <= 'Z') {
            // Handle uppercase letters
            result += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            // If it's not an alphabet character, leave it unchanged
            result += char;
        }
    }

    return result;
}

let ip2 = 'abcxyz';
let op2 = shiftCharacters(ip2);
console.log(op2); 
