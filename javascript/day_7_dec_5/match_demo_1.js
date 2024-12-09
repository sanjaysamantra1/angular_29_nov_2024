let str = 'rain in spain mAinly stays in the plain';
let res1 = str.match(/ain/gi); // match() returns array
console.log(res1);

let str2 = 'Ram and Hari are 2 friends, ram is 15 and hari is 16 years old';
let res2 = str2.match(/\d{1,2}/g); // match() returns plain array
console.log(res2);

let str3 = 'Ram and Hari are 2 friends, ram is 15 and hari is 16 years old';
let res3 = str2.matchAll(/\d{1,2}/g);
for (ele of res3) {
    console.log(ele)
}
