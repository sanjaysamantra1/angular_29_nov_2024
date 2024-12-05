/*
1. write a function recursiveSearch() to print all the keys whose value is []
output : emails, pin , e , h, b 
*/

function recursiveSearch(obj) {
    for (let key in obj) {
      if (obj[key].length === 0) {
        console.log(key);
      }
      if (obj[key] !== null && typeof obj[key] === "object"){
          recursiveSearch(obj[key]);
      }
    }
}
  

const user = {
  name: "sanjay",
  age: 30,
  cars: ["tata", "honda"],
  address: {
    city: "bangalore",
    pin: [],
    xyz: {
      a: 10,
      b: [],
      c: 30,
      d: {
        e: [],
        f: {
          g: 1,
          h: []
        }
      }
    }
  },
  emails: []
};

recursiveSearch(user);