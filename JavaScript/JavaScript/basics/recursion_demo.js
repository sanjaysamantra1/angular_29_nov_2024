// function fact(a){
//     if(a==0){
//         return 1;
//     }
//     return a*fact(a-1);
// }
// let a = fact(6);
// console.log(`Fact of ${a} is ${fact(6)}`);






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

console.log(Array.isArray(user.emails));
console.log(typeof (user));


// 1. write a function recursiveSearch() to print all the keys whose value is []
//    output : email, pin , e , h 

console.log("---------------------------ASSIGNMENT 1---------------------------");

//METHOD 1 : BY STORING IN ARRAY
function recursiveSearch(val,a=[]){
if(typeof val==="object" && val!==null){
    for(let i in val){
        if(Array.isArray(val[i]) && val[i].length===0){
            // console.log(i);
            a.push(i);
        }
        if(typeof val[i]==="object" && val[i]!== null){
            recursiveSearch(val[i],a)
        }
    }   
}
return a;
}
console.log(recursiveSearch(user));

// recursiveSearch(user);



// METHOD-2(without creating array)
// function recursiveSearch(val){
// if(typeof val === "object" && val!==null ){
//     for(let i in val){
//         if(Array.isArray(val[i]) && val[i].length===0){
//             console.log(i);
//         }
//     if(typeof val[i]==="object" && val[i]!==null){
//         recursiveSearch(val[i]);
//     }
//     }
// }
// }

// recursiveSearch(user);




// METHOD 3: ARROW FUNCTION


const recursiveSearch1=(val,a=[])=>{
    if(typeof val==="object" && val!==null){
        for(let i in val){
            if(Array.isArray(val[i]) && val[i].length===0){
                // console.log(i);
                a.push(i);
            }
            if(typeof val[i]==="object" && val[i]!== null){
                recursiveSearch1(val[i],a)
            }
        }   
    }
    return a;
    };
console.log(recursiveSearch1(user));








console.log("---------------------------ASSIGNMENT -2---------------------------");


// ---------------------------------------------------------------------------------------------


// 2. 
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
// Q. Write a function contains() , which scans the object and returns true if the searched value is present 


const contains=(val,find)=>{
    if(typeof val==="object" && val!== null){
        for(let i in val){
            if(typeof val[i]==="object" && val[i]!=null){
                if(contains(val[i],find)){
                    return true;
                }
                }
            else if(val[i]===find){
                return true;
            }
            }
        }
        return false;
    }
console.log(contains(nestedObject, 44));
console.log(contains(nestedObject, "hello"));
console.log(contains(nestedObject, "hiii"));


// contains(nestedObject, 44); // true
// contains(nestedObject, "hello"); // true
// contains(nestedObject, "hiii"); // false





