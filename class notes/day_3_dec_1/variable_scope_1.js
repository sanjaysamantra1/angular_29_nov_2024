var a = 10; // global

function test() {
    var a = 100;
    var b = 200; // function scoped
    console.log('function ', a, b);
}
test();
console.log('global ', a, b);