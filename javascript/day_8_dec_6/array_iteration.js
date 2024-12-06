let cars = ['Toyota', 'Honda', 'Maruti', 'Hundai'];

// 1. loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('==================================')

// 2. for-in  ES_6 (2015)
for (ind in cars) {
    console.log(`${ind}----------${cars[ind]}`)
}
console.log('==================================')

// 3. for-of
for (car of cars) {
    console.log(car)
}
console.log('==================================')

// 4. forEach() 
let res = cars.forEach((val, ind, arr) => {
    console.log(`${val}===${ind}===${arr}`)
})
console.log(res);


// map()
let arr = [10, 20, 30, 40, 50];
let res1 = arr.map(ele => ele + 5);
console.log(res1)