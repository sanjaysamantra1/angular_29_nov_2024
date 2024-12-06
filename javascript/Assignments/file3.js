
function charOccurence(word) {
    const res = {};
    for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);
        res[ch] = (res[ch] || 0) + 1;
    }
    return res;
}
console.log(charOccurence('entertainment'));