let nestedObject = {
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
// Q. Write a function contains() , which scans the object and returns true if the searched value is present

function contains(searchObject, value) {
    for (let x in searchObject) {
        if (searchObject[x] == value) {
            // value found returning true
            return true;
        }

        if (typeof searchObject[x] == 'object' && searchObject[x] != null) {
            // calling contains recursively and inturn returning it's result using return stmt
            return contains(searchObject[x], value);
        }
    }
    // if not found returning false
    return false;
}
console.log(`nestedObject contains 44: ${contains(nestedObject, 44)}`);
console.log(`nestedObject contains hello: ${contains(nestedObject, "hello")}`);
console.log(`nestedObject contains hiii: ${contains(nestedObject, "hiiii")}`);