let str = 'entertainment';

console.log(str.indexOf('n')); // 1
console.log(str.indexOf('n', 2)); // 8
console.log(str.lastIndexOf('n')); // 11

// find the first non-repeated char in a string
for (char of str) {
    if (str.indexOf(char) == str.lastIndexOf(char)) {
        console.log(char);
        break;
    }
}