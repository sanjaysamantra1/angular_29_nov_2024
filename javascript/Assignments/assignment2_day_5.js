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


function findData(object, value) {
    for (key in object) {
        let data = object[key];
        if (typeof data === 'object' && data !== null) {
            if (findData(data, value)) {
                return true;
            }
        } else {
            if (data == value) {
                return true;
            }
        }
    }
    return false;
}

console.log(findData(nestedObject, '44'));





