'use strict'
let myName = "Pradeep Y";
console.log(myName);


let employees = [
    { "eid": 100, "name": "pradeep", "sal": 3000, "gender": "male" },
    { "eid": 110, "name": "pdfdfradeep", "sal": 33333333000, "gender": "male" },
    { "eid": 120, "name": "prad234eep", "sal": 302300, "gender": "male" }
];

console.log(employees); // direct printing
console.table(employees); // output in a table format

console.table(employees, ['name', 'sal']); // only selected rows

console.time('timetoCalculateSum');
let sum = 0;

for (let i = 0; i < 1000000; i++) {
    sum += i;
}
console.log(sum);

console.timeEnd('timetoCalculateSum');

let Infinity;
console.log(Infinity);

function test() {
    console.log(this);
}

console.warn("hello");
test();

