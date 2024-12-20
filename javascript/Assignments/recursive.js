function recursiveSearch(obj) {
    for (const key in obj) {
      if (Array.isArray(obj[key]) && obj[key].length === 0) {
        console.log(key); // Print the key with empty array
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        recursiveSearch(obj[key]); // Recursive call for nested objects
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
      },
    },
    emails: [],
  };
  
  recursiveSearch(user);