
let myPassword = 'Eureka@1234';

let encryptedPassword = btoa(myPassword);
console.log("encryptedPassword: ", encryptedPassword);

let rawPassword = atob(encryptedPassword);
console.log("rawPassword: ", rawPassword)

