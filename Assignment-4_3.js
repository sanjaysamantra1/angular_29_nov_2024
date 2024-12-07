function getAbbreviation(str) {
    
    let words = str.split(' ');

   
    let result = [];

   
    for (let i = 0; i < words.length; i++) {
        if (i < words.length - 1) {
       
            result.push(words[i][0].toUpperCase() + '.');
        } else {
            
            result.push(words[i].toLowerCase());
        }
    }


    return result.join(' ');
}

console.log(getAbbreviation('Rabindra Nath Tagore'));
