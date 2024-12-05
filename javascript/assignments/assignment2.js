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




function fun(obj){
    for(let key in obj){
        if(typeof obj[key] == "object"){
            let len = obj[key].length;
            if(len == 0)
            {
                console.log(key);
            }
            if(len == undefined){
                fun(obj[key])
            }
        }   
    }
}
fun(user);

