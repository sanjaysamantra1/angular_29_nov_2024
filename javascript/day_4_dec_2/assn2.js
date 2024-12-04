
 // Task-1
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



  function EmptyArrays(obj, keys = []) {
    for (const key in obj) {
      if (Array.isArray(obj[key]) && obj[key].length === 0) {
        keys.push(key);
      } else if (typeof obj[key] === 'object') {
        EmptyArrays(obj[key], keys);
      }
    }
    return keys;
  }
  
  console.log(EmptyArrays(user));
  