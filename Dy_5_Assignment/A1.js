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
          h: [],
        },
      },
    },
  },
  emails: [],
};

function recursiveSearch(obj) {
  for (let key in obj) {
    let value = obj[key];

    if (Array.isArray(value) && value.length === 0) {
      console.log(key);
    } else if (typeof value === "object" && value !== null) {
      recursiveSearch(value);
    }
  }
}
recursiveSearch(user);

















//   function recursiveSearch(obj, visited = new Set()) {
//     if (visited.has(obj)) {
//       return;
//     }
//     visited.add(obj);

//     for (let key in obj) {
//       let value = obj[key];

//       if (Array.isArray(value) && value.length === 0) {
//         console.log(key);
//       } else if (typeof value === "object" && value !== null) {
//         recursiveSearch(value, visited);
//       }
//     }
//   }

//   recursiveSearch(user);
