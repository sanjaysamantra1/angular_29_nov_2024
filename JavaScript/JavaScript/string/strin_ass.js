// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

a = 'entertainment';
b = {};

for (i = 0; i < a.length; i++) {

    if (!b[a.charAt(i)]) {
        let count = 1;
        for (j = i + 1; j < a.length; j++) {
            if (a.charAt(i) === a.charAt(j)) {
                count++;
            }
        }

        // console.log(`${a.charAt(i)}:${count}`);
        b[a.charAt(i)] = count;
    }

}

console.log(b);


// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'


let c = 'hello world';
let max = 0;
let start = 0;

for (let i = 0; i < c.length; i++) {
    let count = 1;
    for (let j = i + 1; j < c.length; j++) {
        if (c.charAt(i) === c.charAt(j)) {
            count++;
        }
    }
    start = count;
    if (max < start) {
        max = start;
    }
}
console.log(c.charAt(max).toUpperCase());




// 3. Swap The case for Each Character in a string
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let d = "Hello World";
let d1 = "";
for (i = 0; i < d.length; i++) {
    if (d.charAt(i) == d.charAt(i).toUpperCase()) {
        d1 += d.charAt(i).toLowerCase();
    }
    if (d.charAt(i) == d.charAt(i).toLowerCase()) {
        d1 += d.charAt(i).toUpperCase();
    }

}

console.log(d1);



// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

let e = 'Rabindra Nath Tagore';
// let e1=[...e];
// console.log(e1);
let e1 = e.split(" ");
let e2 = "";
// console.log(typeof(e1));

for (i = 0; i < e1.length; i++) {
    if (i < e1.length - 1) {

        e2 += e1[i][0].toUpperCase() + ". ";
    }
    else {
        e2 += e1[i].toLowerCase();
    }
}

console.log(e2);




// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'

let f = 'abcxyz';
let f1 = "";
let f2 = "abcdefghijklmnopqrstuvwxyz";

for (i = 0; i < f.length; i++) {
    if (f.charAt(i) === 'z') {
        f1 += "a";
    }
    else {
        f1 += f2.charAt(f2.indexOf(f.charAt(i)) + 1);
    }

}

console.log(f1);






// 6. Ask user to enter a sequence of parantheses and validate
//    input: '([{ }])'
//    output : true

let m = '([{ ]])';

const sixthAns = () =>{

let m1 = [];

for (i = 0; i < m.length; i++) {
    if (m.charAt(i) === '(' || m.charAt(i) === '{' || m.charAt(i) === '[') {
        m1.push(m.charAt(i));
    }
    else if (m.charAt(i) === ')') {
        if (m1.pop() !== '(') {
            console.log(false);
            return;
        }
    }
    else if (m.charAt(i) === '}') {
        if (m1.pop() !== '{') {
            console.log(false);
            return;
        }
    }
    else if (m.charAt(i) === ']') {
        if (m1.pop() !== '[') {
            console.log(false);
            return;
        }
    }
}

console.log(m1.length === 0);
}

sixthAns(m);

// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...


let n = 'ABC';
let n1 = ""
const seventhAns=(n)=>{
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            for (let k = 0; k < n.length; k++) {
                if (i !== j && i !== k && j !== k) {                
                    n1 += n.charAt(i);
                    n1 += n.charAt(j);
                    n1 += n.charAt(k);
                    if(i<n.length){
                    n1+=",";
                    }
                }
            }
        }
    }

    console.log(n1.slice(0,-1));
}
seventhAns(n);
// console.log(n1);
