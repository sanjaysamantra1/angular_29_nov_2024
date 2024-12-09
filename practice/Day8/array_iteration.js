let cars = ['Toyota', 'Honda', 'Maruthi', 'Hyundai'];

// 1. loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// 2. for in ES_6 introduced
for (let index in cars) {
    console.log(`${index} --- value: ${cars[index]}`);
}

// 3. for of 
for (let car of cars) {
    console.log(`${car}`);
}

// 4. forEach

cars.forEach((val, index, arr) => {
    console.log(`${val} -- index: ${index}, -- array: ${arr}`);
});

// map method

let arr = [34, 56, 10, 80, 90];
let res1 = arr.map(function (element, index, arr) {
    console.log(element, index, arr);
    element += 1;
    return element;
});
console.log(res1);