function add(...arr) { // Rest param
    let sum = 0;
    for (let ele of arr) {
        sum += ele;
    }
    console.log(sum)
}
add(10, 20);
add(10, 20, 30);
add(10, 20, 30, 40);
add(10, 20, 30, 40, 50);


let cars = ['tata', 'honda', 'maruti'];
let copiedCars = [...cars]; // spread operator (shallow copy)