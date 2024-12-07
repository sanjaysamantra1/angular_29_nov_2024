function shiftCharacters(str) {
    let result = '';

  
    for (let char of str) {
       
        if (char >= 'a' && char <= 'z') {
           
            let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
            result += shiftedChar;
        } else {
            result += char;
        }
    }

    return result;
}

console.log(shiftCharacters('abcxyz'));
