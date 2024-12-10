let obj1 = {
    a: 10,
    b: 20,
    add: function () { // this = obj1 / obj2
        console.log(this.a + this.b);
    }
}
obj1.add();

let obj2 = { a: 100, b: 200 };
// obj2.add(); // add() is not present in obj2
obj1.add.call(obj2); // inside add() , value of this should be 'obj2


let obj3 = { a: 1000, b: 2000 };
obj1.add.call(obj3);