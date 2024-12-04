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

function recursive(user) {
    for (key in user) {
        let data = user[key];
        if (typeof(data) == 'object') {
            if (data.length == undefined) {
                recursive(data);
            } 
            else {
                recursive2(key, data);
            }
        }
    }
}
recursive(user);

function recursive2(key, data) {
    let holder = new Array();
    if (data.length == 0 && !(holder.includes(key))) {
        holder.push(key);
        console.log('key',key);
    }
}



