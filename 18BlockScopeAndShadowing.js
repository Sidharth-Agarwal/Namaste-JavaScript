// Illegal Shadowing

// This can't be done
// let a = 10;

// {
//     var a = 20;
// }

// But this can be done
var a = 10;

{
    let a = 20;
}