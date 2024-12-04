let myPassword = "Pradeep Yendluri";


let encryptedPassword = btoa(myPassword);
console.log(`Encrypted password: ${encryptedPassword}`);

let decryptedPassword = atob(encryptedPassword);
console.log(`Decrypted password: ${decryptedPassword}`);

