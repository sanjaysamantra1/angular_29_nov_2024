let str = 'rain in spain mAinly stays in the plain';

let res1 = str.match(/ain/gi);

console.log(res1);

let str2 = 'Ram and Hari are 2 friends, ram is 15 and hari is 16 years old';

let res2 = str2.match(/\d{1,2}/g);

console.log(res2);

let res3 = str2.matchAll(/\d{1,2}/g);

for (ele of res3) {
    console.log(ele);
}