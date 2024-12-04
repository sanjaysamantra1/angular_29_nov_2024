// Assignments:


// 1. write a function recursiveSearch() to print all the keys whose value is []
//    output : email, pin , e , h 


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

function recursiveSearch(user) {
    for (let k in user) {
        if (user[k].length == 0) {
            console.log(k);
        }
        else if (typeof user[k] == 'object' && user[k] != null) {
            recursiveSearch(user[k]);
        }
    }
}

recursiveSearch(user);