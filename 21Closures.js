function a() {
    var x = 7;
    function b() {
        console.log(x);
    }
    return b;
}

var t = a();
console.log(t);
//.......................................
t();