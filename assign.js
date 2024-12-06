// question 1: Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

let str = 'entertainment';
let dictionary = new Map();
for(let i=0;i<str.length;i++){
    if(!(dictionary.has(str.charAt(i)))){
        dictionary.set(str.charAt(i),1);
    }
    else{
        dictionary.set(str.charAt(i),(dictionary.get(str.charAt(i))+1))
    }
}
for(const [key,value] of dictionary){
    console.log(key, value);
}

// question 2: Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

let str1 ='hello world';
let max= -Infinity;
let dictionary1 = new Map();
for(let i=0;i<str1.length;i++){
    if(!(dictionary1.has(str1.charAt(i)))){
        dictionary1.set(str1.charAt(i),1);
    }
    else{
        dictionary1.set(str1.charAt(i),(dictionary1.get(str1.charAt(i))+1))
    }
}
let key_var = '';
for(const [key,value] of dictionary1){
    if(dictionary1.get(key)>max){
        max=dictionary1.get(key);
        key_var = key;
    }
}
console.log(key_var,max);  

// //hello world
// h-1
// e-1
// l-3
// o-2
// w-1
// r-1
// d-1

//question 3 Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'
let str3 = 'Hello World';
let num1=0;
let d=''
let str101='';
for(let i=0;i<str3.length;i++){
    if(str3.charAt(i)==' '){
        continue;
    }
    else{
        num1 = str3.charAt(i).charCodeAt();
        //console.log(num1);
    //console.log(num1);
    if(num1 > 96){
        num1 = num1-32;
    }
    else{
        num1 = num1+32;
    }
    //console.log(num1);
    d = String.fromCharCode(num1);
    //console.log(d);
    str101=str101.concat(d);
    num1 =0;
    }
}
console.log(str101);
// question 5 Shift the characters by the next character
// input:  'abcxyz'
// output: 'bcdyza'

let str2 = 'abcxyz';
let num ='';
c='';
let str100 ='';
for(let i=0;i<str2.length;i++){
    if(str2.charAt(i)=='z'){
        str100= str100.concat('a');
    }
    else{
        num=str2.charAt(i).charCodeAt();
    num+=1;
    c = String.fromCharCode(num);
    str100= str100.concat(c);
    }
    
}
console.log(str100);

//question 4 Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

// let str4 = 'Rabindra Nath Tagore'
// let str69=' ';
// let dictionary4 = new Map();
// dictionary4.set('Rabindra','R. ');
// dictionary4.set('Nath','N. ');
// dictionary4.set('Tagore','tagore');
// str88= str4.split(' ');
// //console.log(str88);
// for(let i=0;i<str88.length;i++){
//     str69=str69.concat(dictionary4.get(str88[i]));

// }
// console.log(str69);

let str4 = 'Rabindra Nath Tagore';
let strarr=str4.split(' ');
console.log(strarr);
let str55 ='';
for(let i=0;i<strarr.length;i++){
    str55= str55.concat(strarr[i].charAt(0)).concat('. ');
    if(i==strarr.length-2){
        break;
    }
}
   str55=  str55.concat(strarr[strarr.length-1]);
    console.log(str55);

// Ask user to enter a sequence of parantheses and validate 
//    input: '([{}])'
//    output : true


