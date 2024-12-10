function add(a, b) {
    console.log(this.num + a + b);
}
add(2, 3); // NaN

let obj1 = { num: 4 };
let newAdd = add.bind(obj1); // bind this=obj1 in add function and return a new function
newAdd(2, 3); // inside newAdd() function , this=obj1
newAdd(3, 4);
newAdd(4, 5);

