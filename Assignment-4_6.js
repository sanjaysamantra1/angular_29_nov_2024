Input: 'abc'
Output: ['abc','acb','bac','bca','cab','cba']



const getPermutations = (str) => {
  const result = [];
  
  const permute = (current, remaining) => {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const next = current + remaining[i];
      const remainingChars = 
      remaining.slice(0,i)+remaining.slice(i + 1);
      permute(next, remainingChars);
    }
  };

  permute("", str);
  return result;
};

const inputString = "abc";
const permutations = getPermutations(inputString);
console.log(permutations);

