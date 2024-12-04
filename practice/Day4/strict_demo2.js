'use strict'

function add(a, a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a + a + a);
}

add(2, 3, 4);