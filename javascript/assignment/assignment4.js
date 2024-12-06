/*1. Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....}*/

const input = 'entertainment'
const output = {}
for(let ele of input){
    if(output[ele] == undefined){
        output[ele] = 1;
    }
    else{
       output[ele] = output[ele]+1;
    }
}
console.log(output);







/*2. Print the character which is repeated max no of times
   input: 'hello world'
   output : 'L'*/

const input1 = 'hello world';
const output1 ={};
for(let ele1 of input1){
    if(output1[ele1] == undefined){
        output1[ele1] = 1;
    }
    else{
       output1[ele1] = output1[ele1]+1;
    }
}
let out = input1.substring(0, 1);
Object.keys(output1).forEach(element => {
    if(output1[element] >= output1[out]){
        out = element;
    }
});
console.log(out + " with the count of " +output1[out]);






/*
3. Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD'*/

const input2= 'Hello World';
let output2 ='';
for(let val of input2)
{
    if( val.charCodeAt(0)>=97)
    {
        output2+=val.toUpperCase();
    }
    else{
        output2+=val.toLowerCase();
    }
}
console.log(output2);






/*
4. Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore'*/

const input3 = 'Rabindra Nath Tagore';
const val = input3.split(" ");
const lastName = (val.pop()).toLowerCase();
let result =''
for (let eachName of val){
    result += (eachName.substring(0, 1)).toUpperCase()+ '. ';
}
console.log(result+lastName);








/*
5. Shift the characters by the next character
   input:  'abcxyz'
   output: 'bcdyza'*/

const input4=  'abcxyz';
const firstChar = input4.substring(0, 1);
let result1 = (input4+firstChar).substring(1, input4.length+1);
console.log(result1);







/*
6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true*/


// [{(<>)}]     ({<[>]})   (){}[]<>
/*const input5= '(){}[]<>';
const open = ['(', '[','{','<'];
const close = [')', ']','}','>'];
let count=0
function validation(inp){
    const lengt = input5.length;
    if(lengt%2 != 0){
        return false
    }
    else{
        for(let index = 0; index< lengt; index+=2){
            fun(input5.charAt(index), input5.charAt(index+1));
        }
        if(count==lengt/2)
            return true;
    }
}
function fun(firstcharecter, secondcharecter){
    if(open.includes(firstcharecter)){
        let position = open.indexOf(firstcharecter);
        if(close.includes(secondcharecter)){
            if(secondcharecter == close[position]){
                count++;
            }
        }
    }
}
console.log(validation(input5));
*/




const input5 ='[{(<>)}]';
const open = ['(', '[','{','<'];
const close = [')', ']','}','>'];
let count=0
function validation(inp){
    const lengt = input5.length;
    if(lengt%2 != 0){
        return false
    }
    else{
        for(let index = 0; index< lengt/2; index+=1){
            fun(input5.charAt(index), input5.charAt(lengt-index-1));
        }
        if(count==lengt/2)
            return true;
    }
}
function fun(firstcharecter, secondcharecter){
    if(open.includes(firstcharecter)){
        let position = open.indexOf(firstcharecter);
        if(close.includes(secondcharecter)){
            if(secondcharecter == close[position]){
                count++;
            }
        }
    }
}
console.log(validation(input5));



/*
const input5 ='({<[>]}){(})<[>]';
let open = ['(', '[','{','<'];
let close = [')', ']','}','>'];
let count=0
const outputfinal={}
function validation(inp){
    let lengt = input5.length;
    if(lengt%2 != 0){
        return false
    }
    else{
        for(let ele3 of input5){
            if(outputfinal[ele3] == undefined){
                outputfinal[ele3] = 1;
            }
            else{
               outputfinal[ele3] = outputfinal[ele3]+1;
            }
        }
        if(count==lengt/2)
            return true;
    }
    open.forEach(element => {
        if(element in outputfinal)
        {
            //outputfinal[element] == 
            let position = open.indexOf(element);
            let valu = outputfinal[element];
            let closepara = close[position];
            if( valu == outputfinal[closepara]){
                count++;
            }
        }
        
    });
}
console.log(validation(input5));
*/





/*
7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...*/

const input6= 'ABC';
const len = input6.length;
let output3= []
for(let first of input6){
    for(let second of input6){
        for(let third of input6){
            output3.push(first+second+third);
        }
    }
}
console.log(output3);

