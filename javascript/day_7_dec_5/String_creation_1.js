let str1 = 'Hello'; // String Literals
let str2 = 'Hello';

let str3 = new String('Hello'); // String Objects
let str4 = new String('Hello');

// 1. datatype
console.log(typeof str1); // String
console.log(typeof str3); // Object

// 2. How Comparision happens
console.log(str1 == str2);  // true  (value compare)
console.log(str2 == str3);  // true  (value compare)
console.log(str3 == str4);  // false (address compare)
console.log([] == []);      // false (address compare)
console.log({} == {});      // false (address compare)

// 3. eval()
let str5 = '2+3+4';
console.log(eval(str5)); // 9
let str6 = new String('2+3+4');
console.log(eval(str6));  // [String: '2+3+4']
let str7 = str6.valueOf();
console.log(eval(str7)); // 9

