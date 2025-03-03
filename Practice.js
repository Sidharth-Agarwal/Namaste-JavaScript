const arr = [5,4,3,10,2]

// Map
function double(x){
    return x*2
}

const doubleOutput = arr.map(double)

console.log(doubleOutput)

function triple(x){
    return x*3
}

const tripleOutput = arr.map((x)=> {
    return x*3
})

console.log(tripleOutput)

const binary = arr.map((x) => {
    return x.toString(2)
})

console.log(binary)

// Filter
function isOdd(x){
    return x % 2;
}

const oddFilter = arr.filter(isOdd)
console.log(oddFilter)

// Reduce
function findSum(arr) {
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum;
}

console.log(findSum(arr))

const output = arr.reduce(function(acc, curr) {
    if(curr > acc){
        acc = curr
    }
    return acc
}, arr[0])

console.log(output)