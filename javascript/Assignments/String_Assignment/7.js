// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...

function wordPermutations(inputStr) {
    const permute = (str) => {
        let result = [];
        if (str.length === 1) return [str];
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let remainingStr = str.slice(0, i) + str.slice(i + 1);
            let remainingPerms = permute(remainingStr);
            for (let perm of remainingPerms) {
                result.push(char + perm);
            }
        }
        return result;
    };
    return permute(inputStr);
}

const inputStr = 'ABC';
console.log(wordPermutations(inputStr).join(', '));
