// Shadowing behaves the same way in the case of functions
const c = 100;
function x()
{
    const c = 30;
    console.log(c);
}
x();
console.log(c);