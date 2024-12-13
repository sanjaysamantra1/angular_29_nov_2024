function f1() {
    console.log('I am f1...');
    f1();
}
f1(); // RangeError: Maximum call stack size exceeded