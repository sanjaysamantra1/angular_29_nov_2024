// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

function maxRepeatedChar(inputStr) {
    let count = {};
    for (let char of inputStr) {
        count[char] = (count[char] || 0) + 1;
    }
    let maxChar = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
    return maxChar.toUpperCase();
}

const inputStr = 'hello world';
console.log(maxRepeatedChar(inputStr));
