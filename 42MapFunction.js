const radius = [3,1,2,4];

const area = function (radius){
    return (Math.PI * radius * radius);
}

const circumference = function(radius){
    return (2 * Math.PI * radius);
}

const diameter = function(radius){
    return (2 * radius);
}

// This is also out implementation of the MAP function
Array.prototype.calculate = function (logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};

// The map function can also be used to map function directly according to their use cases.
console.log(radius.map(area))

console.log(radius.calculate(area));
// console.log(radius.calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));