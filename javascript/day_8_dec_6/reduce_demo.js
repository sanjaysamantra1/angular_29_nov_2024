let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
}, 0);
console.log(sum);

// reverse a string using reduce method
let str = 'Hello World';
let charsArr = str.split('');
let revStr = charsArr.reduce((prev, curr) => {
    console.log(prev, curr)
    return curr + prev;
}, '');
console.log(revStr)