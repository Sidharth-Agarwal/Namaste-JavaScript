const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000);
})

async function handlePromise() {
    console.log("Hello world!!!")
    // JS Engine will wait for the promise to resolve
    const val = await pr;
    console.log("Hello")
    console.log(val)

    const val2 = await pr;
    console.log("Hello2")
    console.log(val2)
}
handlePromise()

// function getData() {
//     // JS Engine will not wait for the promise to resolve
//     pr.then((res) => console.log(res));
//     console.log("Namaste Js")
// }
// getData()