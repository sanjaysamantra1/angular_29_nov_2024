function test() {
    if (true) {
        var name = 'sachin tendulkar';
        console.log('block: ', name);
    }
    console.log('function: ', name);
}
test();
// Note : even though 'name' is declared inside a block, it is visible outside the block
// using 'var' block scoped variables cann't be declared

for (var i = 1; i <= 3; i++) {
    console.log('inside loop i is ', i); // yes
}
console.log('outside loop i is', i); // yes

for (let j = 1; j <= 3; j++) {
    console.log('inside loop j is', j); // yes
}
console.log('outside loop j is', j); // No