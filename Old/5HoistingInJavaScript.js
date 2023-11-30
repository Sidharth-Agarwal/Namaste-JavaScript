getName();
console.log(x);
console.log(getName);

var x = 7;

// Here it behaves like a variable
// Memory allocation is done as undefined for this
var getName3 = function()
{

}

// Here it behaves like a function
// Space is also reserved in memory component as the function itself
function getName2()
{

}

// Here it behaves like a variable
// Space is not reserved in the memory component
// And it is undefined
var getName = () =>{
    console.log("Namaste JavaScript!!!");
}