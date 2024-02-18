console.log("start");

setTimeout(function cb(){
    console.log("Callback")
}, 5000);

console.log("end");

// Too much code

// Another way to simulate a similar environment.

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("while expires");

// Lesson - Never Block Your Main Thread