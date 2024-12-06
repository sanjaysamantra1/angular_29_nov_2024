let cars = ['Toyota', 'Honda', 'Maruti', 'Hundai'];
console.log(cars.length); // 4
delete cars[2];  // only deltes the value and not the placeholder
console.log(cars.length); // 4
console.log(cars);        // [ 'Toyota', 'Honda', <1 empty item>, 'Hundai' ]

cars.splice(2, 1); // deletes the value and placeholder
console.log(cars); // [ 'Toyota', 'Honda', 'Hundai' ]



// splice()    1.only insert   2. only delete  3. both insert and delete
// splice(ind , #elements to delete , elements to insert)
let arr = [10, 20, 30, 40, 50];
arr.splice(1, 2); // only delete
console.log(arr);
arr.splice(1, 0, 20, 30); // only insert
console.log(arr);
arr.splice(1, 2, 25, 35);
console.log(arr)


