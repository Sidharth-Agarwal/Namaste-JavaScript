// What is a CallBack Function in JavaScript 
// Function are first class citizen.
// So, when functions are passed as an argument to another functions are called "CallBack Functions"

// JavaScript is a synchoronous and single-threaded language

setTimeout(function(){
    console.log("Timer")
},5000)

function x(y) {
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
})