// console.log("start");

// setTimeout(function cb(){
//     console.log("Callback")
// }, 0);

// console.log("end");

console.log("start");

function cb(){
    console.log("Callback")
}

setTimeout(cb, 0);

console.log("end");