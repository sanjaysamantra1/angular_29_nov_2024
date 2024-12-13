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

  /*Q. Write a function contains() , which scans the object and returns true if the searched value is present 

  contains(nestedObject, 44); // true
  contains(nestedObject, "hello"); // true
  contains(nestedObject, "hiii"); // false*/

let value = false;
  function contains(obj, val){
    let value = false;
    function fun(obj){
        for(let key in obj){
            if( val == obj[key])
            {
                value = true;
                continue;
            }
            else if(typeof obj[key] == "object"){
                let len = obj[key].length;
                if(len == undefined){
                    fun(obj[key])
                }
            }   
        }
    }
    fun(obj);
    return value;
  }
  console.log(contains(nestedObject, 44));  
  console.log(contains(nestedObject, "hello"));
  console.log(contains(nestedObject, "hiii"));

