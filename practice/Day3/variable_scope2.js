function test() {
    if (true) {
        var name = "pradeep";
        console.log(`block: ${name}`);
    }
    console.log(`outside block in function: ${name}`);
    // using var, variable is accessible within function.
}

for (var i = 0; i < 10; i++) {
    console.log(`i value is ${i}`);
}
console.log(`outside: ${i}`);

for (let j = 0; j < 20; j++) {
    console.log(`j value is ${j}`);
}
console.log(`outside using let ${j}`);