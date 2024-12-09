// localeCompare() returns  0 1 -1

console.log('ajay'.localeCompare('deepak')); // -1
console.log('manoj'.localeCompare('deepak')); // 1
console.log('manoj'.localeCompare('manoj')); // 0

console.log('manoj'.localeCompare('manas')); // 1
console.log('abc'.localeCompare('ab')); // 1
console.log('aaa'.localeCompare('AAA')); // 1

console.log('aaa' > 'AAA');