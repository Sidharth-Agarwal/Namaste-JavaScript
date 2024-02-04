// Example of shadowing
// This also overwrite the value of 'a' in and out of the scope
// This shadowing doesn't happen in case of 'let' and 'const'
var a = 100;
let b = 100
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);