// a();
// b();
// The different between the two function comes in terms of hoisting
// The "Function Statement" works just fine when hoisting is done
// The "Function Expression" is assigned UNDEINED until the variable line is hit
// The b() above will throw an error but a() will not

// Function Statement
function a(){
    console.log("Function Statement Called");
}
a();
// This way of creating a function is called a function statement

// Function Expression
var b = function (){
    console.log("Function Expression Called");
}
b();

// Function Declaration
// A "Function Declaration" is just as same as the "Function Statement"
// They both at the same thing

// Anonymous Function
// These function don't have their own identity.
// function (){
//     console.log("Anonymous Function Called")
// }
// Anonymous Function will throw error when used like this
// So, these are generally used in the placed where function are used as values

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

// Difference between Parameters and Arguments?
