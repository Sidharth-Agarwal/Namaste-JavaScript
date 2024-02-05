function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}
// this will give error
console.log(count);