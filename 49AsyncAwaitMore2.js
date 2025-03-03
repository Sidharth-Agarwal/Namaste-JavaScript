const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000);
})

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    }, 5000);
})

async function handlePromise() {
    console.log("Hello world!!!")
    // JS Engine will wait for the promise to resolve
    const val = await pr;
    console.log("Hello")
    console.log(val)

    const val2 = await pr2;
    console.log("Hello2")
    console.log(val2)
}
handlePromise()