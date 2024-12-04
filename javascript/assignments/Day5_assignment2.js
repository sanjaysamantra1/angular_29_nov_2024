var nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 22,
              something: "hello",
              manyMoreStuff: {
                number: 44,
              },
            },
          },
        },
      },
    },
  };

function contains(obj, value) {
    for (let i in obj) {
        if (obj[i] == value) {
            return true;
        } else if (typeof obj[i] == "object" && obj[i] != null) {
            if (contains(obj[i], value)) {
                return true;
            }
        }
    }
    return false;
}

console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, "hello")); // true
console.log(contains(nestedObject, "hiii")); // false
