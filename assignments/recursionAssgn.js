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


function recursiveSearch(val,a=[]){
if(typeof val==="object" && val!==null){
    for(let i in val){
        if(Array.isArray(val[i]) && val[i].length===0){
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




// 2. 
var nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 22,
              something: "wave",
              manyMoreStuff: {
                number: 44,
              },
            },
          },
        },
      },
    },
  };
//  Write a function contains() , which scans the object and returns true if the searched value is present 


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
console.log(contains(nestedObject, "Wave"));
console.log(contains(nestedObject, "Bharath"));