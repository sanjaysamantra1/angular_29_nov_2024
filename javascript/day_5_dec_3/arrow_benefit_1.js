let arr = [10, 20, 30, 40, 50];

// increase each value by 5

// map() is higherOrder Function
// The function which takes another function as argument is called higherOrder Function
// the callBack function is a regular function
function incrementBy5(ele){
    return ele + 5;
}
let res1 = arr.map(incrementBy5); // map() is HigherOrder , incrementBy5 is callback
console.log(res1);

// the callBack function is an arrow function
let res2 = arr.map((ele)=>ele+5);
console.log(res2)




