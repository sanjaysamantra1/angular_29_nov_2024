let arr = [10, 20, 30, 40, 50];

let [a, b, c] = arr; // array de-structuring
console.log(a, b, c)


let user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
console.log(user.address.city);
console.log(user.address.zipcode);
console.log(user.address.geo.lat)
console.log(user.address.geo.lng) // Es - 5
console.log('============================');

// es-6
let { name, email, address: { city, zipcode, geo: { lat, lng } } } = user;
console.log(city);
console.log(zipcode);
console.log(lat)
console.log(lng)
