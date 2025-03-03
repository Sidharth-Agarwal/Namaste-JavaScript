const pr = new Promise((resolve, reject)=> {
    resolve("Promise resolveed")
})

// An async function always returns a promise
// async function getData(){
//     return pr
// }

// const data = getData();
// console.log(data)
// data.then(res => {
//     console.log(res);
// })

// How we used to resolve promises
function resolvePromise(){
    pr.then((res) => console.log(res))
}
resolvePromise()

// Using async await combination
// await can only be inside an async function
async function handlePromise(){
    const value = await pr;    
    console.log(value)
}
handlePromise()