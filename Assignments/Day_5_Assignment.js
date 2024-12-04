console.log("____Task-1___")
        // Task-1 */
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
      
    function recursiveSearch(obj) 
    {
        for (let key in obj) 
        {
            if (Array.isArray(obj[key]) && obj[key].length === 0)
            {
                console.log(key); // Print keys with empty arrays
            } 
            else if (typeof obj[key] === "object") 
            {
                recursiveSearch(obj[key]); // Search nested objects
            }
        }
    }
    recursiveSearch(user);
      
    console.log("____Task-2___")
      
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