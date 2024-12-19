// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

function abbreviation(inputStr) {
    let words = inputStr.split(' ');
    let abbr = words.slice(0, -1).map(word => word[0].toUpperCase()).join('. ') + ' ' + words[words.length - 1].toLowerCase();
    return abbr + '.';
}

const inputStr = 'Rabindra Nath Tagore';
console.log(abbreviation(inputStr));
