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
      },
    },
    emails: [],
  };

function recursiveSearch(obj){
    let res = []
    for (let i in obj) {
        if (typeof obj[i] == "object" && obj[i].length == 0) {
                res.push(i);
        }else if (typeof obj[i] == "object" && obj[i] != null) {
            res = res.concat(recursiveSearch(obj[i]));
        }
    }
    return res;
}

console.log(recursiveSearch(user));