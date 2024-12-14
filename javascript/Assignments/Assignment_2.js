{/* <script type="text/javascript"> */}

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

    function recursiveSearch(a){
if(typeof a === "object" && a!==null ){
    for(let i in a){
        if(Array.isArray(a[i]) && a[i].length===0){
            console.log(i);
        }
    if(typeof a[i]==="object" && a[i]!==null){
        recursiveSearch(a[i]);
    }
    }
}
}

recursiveSearch(user);

    // function recursiveSearch(obj) {
//Method 2
// const recursiveSearch=(obj)=>{
//         let result = [];
//         for (let key in obj) {
//             if(Array.isArray(obj[key]) && obj[key].length === 0) {
//                 result.push(key);
//             }
//             else if ((typeof obj[key] === 'object') && obj[key] !== null && !Array.isArray(obj[key])) {
//             let recursiveResult = recursiveSearch(obj[key]);
//             // result = result.concat(recursiveResult);
//               result = [...result, ...recursiveResult];
//             }
//         }
//         return result;
        
//     }
//     let emptyArrrayKeys = recursiveSearch(user);
//     emptyArrrayKeys.forEach(key => {
//         console.log(key);
//     });


// console.log("_____Task-2____")

    // Task-2
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

    function contains(obj, value){
        for(let key in obj){
            if(obj[key] === value){
                return true;
            }
            if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])){
                if(contains(obj[key], value)){
                    return true;
                }
            }
        }
        return false;
    }

    console.log(contains(nestedObject, 44)); // true
    console.log(contains(nestedObject, "hello")); // true
    console.log(contains(nestedObject, "hiii")); // false



    // </script>