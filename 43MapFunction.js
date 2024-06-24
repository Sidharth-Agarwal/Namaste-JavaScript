const arr = [5,1,3,6];

function double(x){
    return x*2;
}

const output0 = arr.map(double);
console.log(output0);

const output = arr.map(
    function binary(x){
        return x.toString(2);
})

function isOdd(x){
    return x%2;
}

const output2 = arr.filter(isOdd);
console.log(output2);

const output3 = arr.reduce(function(acc,curr) {
    acc = acc + curr;
    return acc;
}, 0)

const output4 = arr.reduce(function(acc,curr) {
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0)

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "sidharth", lastName: "agarwal", age: 21},
    { firstName: "veer", lastName: "singh", age: 39}
]

const output5 = users.map((x) => {
    x.firstName + " " + x.lastName;
})

const output6 = users.reduce((acc,curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{})

const output7 = users.filter((x) => {
    x.age < 30
}).map((x) => {
    x.firstName
})