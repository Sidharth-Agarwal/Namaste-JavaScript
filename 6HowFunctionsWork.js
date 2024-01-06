var x = 1;

// Firstly this is executed
a();

// Secondly this is executed
b();

// At last this code is executed
console.log(x);

function a()
{
    var x = 10;
    console.log(x);
}

function b()
{
    var x = 100;
    console.log(x);
}