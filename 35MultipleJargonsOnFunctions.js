// a();
// b();
// The different between the two function comes in terms of hoisting
// The "Function Statement" works just fine when hoisting is done
// The "Function Expression" is assigned UNDEFINED until the variable line is hit
// The b() above will throw an error but a() will not

// 1.
// Function Statement
function a(){
    console.log("Function Statement Called");
}
a();
// This way of creating a function is called a function statement

// 2.
// Function Expression
var b = function () {
    console.log("Function Expression Called");
}
b();
// This is the way of writing a function expression

// 3.
// Function Declaration
// A "Function Declaration" is just as same as the "Function Statement"
// They both are the same thing

// 4.
// Anonymous Function
// These function don't have their own identity.
// function (){
//     console.log("Anonymous Function Called")
// }
// Anonymous Function will throw error when used like this
// So, these are generally used in the placed where function are used as values

// 5.
// Named Function Expression
// This is similar to "Function Expression"
// The only difference in this is that the function is named instead being anonymous
var c = function cc(){
    console.log("Named Function Expression Called");
}
c();
// cc();
// This is a corner case in JavaScript
// If we called this function a reference error will be thrown out

// 6.
// Difference between Parameters and Arguments?
// Function parameters are the variables that are local to the function
// Function Arguments are the variables that are passed in the function call
function temp(param1, param2){
    return param1 + param2;
}

console.log(temp(1,2));
// Here
// param1, param2 are the function parameters
// 1,2 are the function arguments

// 7.
// First Class Function
// The ability to use function a values, parameter, arguements and return statement is called "First Class Functions"
// Also known as "First Class Citizens"
var c = function(param1) {
    return function xyz() {

    }
}

console.log(b());

// 8. 
// Arrow Functions
// To Do