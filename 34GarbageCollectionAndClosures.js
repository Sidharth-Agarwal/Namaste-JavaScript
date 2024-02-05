function a(){
    var x = 0;
    return function b(){
        console.log(x);
    }
}

var y = a();
//...
y();