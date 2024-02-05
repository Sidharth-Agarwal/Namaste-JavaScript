function counter(){
    var count = 0;
    return function increamentCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

// This is a new counter and will not affect another counter
var counter2 = counter();
counter2();
counter2();
counter2();
counter2();
counter2();