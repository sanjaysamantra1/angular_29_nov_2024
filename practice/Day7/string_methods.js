
// STRING METHODS

let str1 = "cntertainment";
console.log(str1.indexOf('n'));
console.log(str1.indexOf('n', 2));
console.log(str1.lastIndexOf('n'));

console.log("")

for (char of str1) {
    if (str1.indexOf(char) == str1.lastIndexOf(char)) {
        console.log(char);
        break;
    }
}