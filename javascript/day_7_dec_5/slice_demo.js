let str = 'this is javascript class';

console.log(str.slice(8, 12));     // java
console.log(str.substring(8, 12)); // java

console.log(str.slice(8, -2)); // javascript cla
console.log(str.substring(8, -2));

// Note : slice works with -ve index , where as substring doesn't