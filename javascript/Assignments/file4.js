 function maxOccurrence(str) {
    let maxChar = '';
    let count = 0;
    const occurrences = {};
    str = str.toLowerCase(); 
    
    for (let i = 0; i < str.length; i++) { // parsing through the character occurences
        let char = str.charAt(i);
        occurrences[char] = (occurrences[char] || 0) + 1;
    }
    for (const char in occurrences) {
        if (occurrences[char] > count) {
            count = occurrences[char];
            maxChar = char;
        }
    }

    return maxChar.toUpperCase(); 
}

console.log(maxOccurrence('hello world'));