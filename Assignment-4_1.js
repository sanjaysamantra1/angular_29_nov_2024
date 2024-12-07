const count = (str) =>{
    let obj = {}
    for (let char of str )
    (!obj[char])?obj[char] = 1:obj[char]++;
     
    let maxNum = 0;
    let maximumChar = '';

    for (let char in obj)
    {
        if(obj[char] >= maxNum)
        {
            maxNum = obj[char];
            maximumChar = char;
        }
    }

    console.log(`${maximumChar} appears ${maxNum} times`);
}
count("hello world");