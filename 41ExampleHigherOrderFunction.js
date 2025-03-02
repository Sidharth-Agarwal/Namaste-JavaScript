// The better way of writing the code

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

const calculate = function (radius, logic){
    const output = [];

    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// More examples of Higher order functions
function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5)); // 10
  console.log(triple(5)); // 15

  function compose(f, g) {
    return function(x) {
      return f(g(x));
    };
  }
  
  const addOne = x => x + 1;
  const square = x => x * x;
  
  const addThenSquare = compose(square, addOne);
  console.log(addThenSquare(3)); // (3+1)² = 16