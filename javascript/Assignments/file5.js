function swapCase(word) {
    let res1 = '';
    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (char === char.toLowerCase()) {
            res1 += char.toUpperCase();
        } else {
            res1 += char.toLowerCase();
        }
    }
    return res1;
}

console.log(swapCase('Hello World'));