// Example of scope
// This won't give any error

function a()
{
    c();

    function c()
    {
        console.log(b);
    }
}

var b = 10;
a();

// This will give error

function d()
{
    var e = 10;

    c();

    function c()
    {

    }
}

a();
console.log(b);