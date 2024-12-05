function contains(obj, searchValue) {
  for (let key in obj) {
    const value = obj[key];
    if (value === searchValue) {
      return true;
    }
    if (typeof value === "object" && value != null) {
      if (contains(value, searchValue)) {
        return true;
      }
    }
  }
  return false;
}

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
console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, "hello")); // true
console.log(contains(nestedObject, "hiii")); // false