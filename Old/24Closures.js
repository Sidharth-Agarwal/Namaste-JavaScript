function x()
{
    var a = 7;

    // function y()
    // {
    //     console.log(a);
    // }

    // return y;

    return function y()
    {
        console.log(a);
    }
}
var z = x();
console.log(z);
//............
z();