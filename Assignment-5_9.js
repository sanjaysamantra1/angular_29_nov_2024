input = [10,20,30,40,50,10,30,50]

console.log(
    input.reduce((acc,val) =>
    (acc[val] = (acc[val] || 0) + 1, acc), {}));