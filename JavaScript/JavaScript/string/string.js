// let a = '1+5+3';
// console.log(typeof(a));
// console.log(eval(a));

// let b = new String('4+4+9')
// console.log(typeof(b)); // 
// console.log(eval(b));

// let c = b.valueOf();
// console.log(typeof(c));
// console.log(eval(c));

// let str1 = 'Hello'; // String Literals
// let str2 = 'Hello';

// let str3 = new String('Hello'); // String Objects
// let str4 = new String('Hello');

// // 1. datatype
// console.log(typeof str1); // String
// console.log(typeof str3); // Object

// // 2. How Comparision happens
// console.log(str1 == str2);  // true  (value compare)
// console.log(str2 == str3);  // true  (value compare)
// console.log(str3 == str4);  // false (address compare)
// console.log([] == []);      // false (address compare)
// console.log({} == {});      // false (address compare)

// // 3. eval()
// let str5 = '2+3+4';
// console.log(eval(str5)); // 9
// let str6 = new String('2+3+4');
// console.log(eval(str6));  // [String: '2+3+4']
// let str7 = str6.valueOf();
// console.log(eval(str7)); // 9





// let str = 'entertainment';

// console.log(str.indexOf('n')); // 1
// console.log(str.indexOf('n', 2)); // 8
// console.log(str.lastIndexOf('n')); // 11






let str = 'entertainment';

for(let i=0;i<str.length;i++){
    let val= true;
    for(let j=0;j<str.length;j++){
        if(i!==j && str.charAt(i)==str.charAt(j)){
            val=false;  
            break;     
        }
    }
    if(val){
        console.log(str.charAt(i));
        
    }
}


// only + will concat strings
console.log('2'+3+4); //234
console.log(3+'2'+6); //326
console.log(5+7+'5'); //125
console.log('3' - 2); // 1
console.log('3' * 2); // 6




//SLICE


let a1 = "This is Rohith Rudrapati";
console.log(a1.slice(7,14));  // Rohith
console.log(a1.substring(7,14)); // Rohith

console.log(a1.slice(7,-90)); //blank

console.log(a1.slice(7,-9)); // starts from 7 and ends with checking 9 letter from backside
console.log(a1.substring(7,-9)); /// gives garbage values as substring wont work for -ve numbers




// REGEX
let str1 = 'rain in spain mAinly stays in the plain';
let res1 = str1.match(/in/);
console.log(res1); // logs only one in and gives index of that

let str2 = 'rain in spain mAinly stays in the plain';
let res2 = str2.match(/in/g);
console.log(res2); // logs all "in" as we used g for global calling so it searches all the content

let str3 = 'rain in spain mAinly stays in the plain';
let res3 = str3.match(/IN/g);
console.log(res3); // prints null

let str4 = 'rain in spain mAinly stays in the plain';
let res4 = str4.match(/IN/gi); 
console.log(res4); // gives all "in" as we used i for ignoring case senstive

let str5 = 'Ram and Hari are 2 friends, ram is 15 and hari is 16 years old';
let res5=str5.match(/\d/g);
console.log(res5);  // [ '2', '1', '5', '1', '6' ] as d will give only numbers with breaking them


let str6 = 'Ram and Hari are 2 friends, ram is 15 and hari is 16 years old';
let res6=str6.match(/\d{1,2}/g);
console.log(res6); // as we use {1,2} it will print 1 and 2 digited nmbrs

// let str7 = 'Ram and Hari are 2 friends, ram is 15 and hari is 16 years old';
// let res7 = str7.matchAll(/\d{1,2}/g);
// for (ele of res7) {
//     console.log(ele) // prints all data in detailedtelling which nmbr which index it is located and all
// }



// LOCAL COMPARE (BASED ON ASCI VALUES)
// caps and small letter have diff values and they are not same
// return -1 if first letter comes before second one alphabetically
// return 0 if first letter and second are equal
// return 1 if first letter comes after second one alphabetically
console.log('ajay'.localeCompare('rohith')); //-1
console.log('ajay'.localeCompare('abvind'));  //1 as both a are same checks next one and if that is also same its go on 
console.log('rohith'.localeCompare('rohith')); //0
console.log('rohith'.localeCompare('Rohith')); //-1





/* 
    == equality          (if required it typecasts and compares the values)
    === strict equality  (never typecasts and compares the values)
*/

console.log(5 == 5);   // true
console.log(5 == '5'); // true
console.log(5 == 'a'); // false
console.log(5 === '5'); // false

console.log(1 == true); // true
console.log(1 == 'true'); // false
console.log(1 === true); // false

let arr = [10,20]
console.log( arr == '10,20'); // true , array gets typecasted to string
console.log( arr === '10,20'); // false 
// alert(arr);




console.log('aaa'>'AAA');
