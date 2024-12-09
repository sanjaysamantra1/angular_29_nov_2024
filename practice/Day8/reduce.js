let arr = [10, 20, 30, 40, 50, 60];

let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
}, 10000);
console.log(sum)

let str = 'Hello World';
let charsArray = str.split('');

console.log(charsArray);
let revStr = charsArray.reduce((prev, curr) => {
    console.log(prev, curr);
    return curr + prev;
}, '');

console.log(revStr);
