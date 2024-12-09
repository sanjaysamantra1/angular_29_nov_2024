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
  for (let key in obj) {
    if (obj[key] == value) { 
      console.log(key);
      return true; 
    }
    else if (typeof obj[key] == "object" && obj[key] != null) {
      if (contains(obj[key], value)) {
        return true; 
      }
    }
  }
  return false; 
}

contains(nestedObject, 22);


// function contains(obj, value) {
//   for (let key in obj) {
//     if (obj[key] == value){ 
//         console.log(key);
//     }
//     else if( typeof(obj[key]=="object" )&& obj[key]!=null){
//         return contains(obj[key],value);
//     }
//   }
// }
// contains(nestedObject, 44);

