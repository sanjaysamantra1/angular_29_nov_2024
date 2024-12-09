const inputArr = [ 
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
  ];
  
  const output = inputArr.join('').split('').reduce((acc, letter) => {
    const word = acc[acc.length - 1] || '';
    if (letter === '') {
      acc.push(word);
    } else {
      acc[acc.length - 1] = word + letter;
    }
    return acc;
  }, []);
  console.log(output); // ['bake', 'cake', 'eat']
  