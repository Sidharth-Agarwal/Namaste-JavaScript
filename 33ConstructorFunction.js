// Example of constructor function
function counter(){
    var count = 0;

    this.incrementCounter = function(){
        count++;
        console.log(count);
    }

    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

// New keyword is used while using constructor function
var counter1 = new counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();