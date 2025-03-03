async function handlePromise() {
    try{
        const github = await fetch("https://api.github.com/users/sidharth-agarwal");
        const jsonValue = await github.json()
        console.log(jsonValue)
    }
    catch(err){
        console.log(err)
    }
}
handlePromise()

// async function handlePromise() {
//     try{
//         const github = await fetch("https://api.github.com/users/sidharth-agarwal");
//         const jsonValue = await github.json()
//         console.log(jsonValue)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// handlePromise().catch(err => console.log(err))