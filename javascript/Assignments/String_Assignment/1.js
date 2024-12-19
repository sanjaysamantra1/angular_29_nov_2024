// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}
function charCount(inputStr) {
    let count = {};
    for (let char of inputStr) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

const inputStr = 'entertainment';
console.log(charCount(inputStr));

