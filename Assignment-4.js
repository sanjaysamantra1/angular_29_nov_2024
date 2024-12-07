const count = (str) =>{
    let obj = {}
    for (let char of str )
    (!obj[char])?obj[char] = 1:obj[char]++;

    console.log(obj);
}
count("entertainment");
