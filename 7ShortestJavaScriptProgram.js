// This is nothing but the shortest program possible in JavaScript

// Type "window" in the console to check everything

// It is also creates a "this" object for us
// It points to the window object in the global level

// 'let' & 'const' keyword in not recognized by the window object
// only 'var' is recognized by the window object
// In any other case undefined is shown
var a = 10;

function x() {
    const x = 100;
}

console.log(window.a);
console.log(this.a)
console.log(a);
console.log(window);
console.log(this === window);