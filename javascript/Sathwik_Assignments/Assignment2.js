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
  
  function Assign(obj ){
    for(let i in obj){
        if(typeof (obj[i])==='object')
        {
            if(obj[i].length===0){
                console.log(i);
            } 
            else if(obj[i].length===undefined){
                Assign(obj[i]);

            }
        }
    }

  }
  Assign(user);