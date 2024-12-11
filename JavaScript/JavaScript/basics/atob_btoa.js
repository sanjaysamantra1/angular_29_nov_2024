let myPass= "Rohith Rudrapati"

let encrypedPass = btoa(myPass)
console.log(encrypedPass); // encrypts the pass


let rawPass = atob(encrypedPass);
console.log(rawPass); // give the raw pass (org one bef encrption)
