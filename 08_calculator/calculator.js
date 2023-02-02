const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a + b, 0); // 0 -> initial value
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b, 1); // 1 -> initial value

};

const power = function(number, exponent) {

  for(let i =0; i < exponent; i++) {
    number *= number;
  }
	
};

const factorial = function(number) {
	if(number === 0) return 1;
  return (number * factorial(number - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
