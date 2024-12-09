let cars = ['Toyota', 'Honda', 'Maruti', 'Hyundai'];

console.log(`${cars} - length: ${cars.length}`);

delete cars[2]; // only deletes the value and not placeholder.

console.log(cars);

cars.splice(2, 1); // DELETE: starting_point, number of values to detele. Deletes value and placeholder;

console.log(cars);

// splice() 1. only insert 2. only delete 3. both insert and delete
// splice(index, no of elements to delete, elements to insert);

let arr = [10, 20, 30, 40, 50];
arr.splice(1, 2); // only delete

console.log(arr);

arr.splice(1, 0, 20, 30, 40, 50, 60) // only insert, use 0 as delete count and use index to insert values from that point.
console.log(arr);

arr.splice(1, 2, 25, 67, 100); // delete and replace
console.log(arr);