const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (const n of arr) {
    total *= n;
  }
  return total;
};

const power = function(a, n) {
  original = a;
	for (let i = 1; i < n; i++) {
    a *= original;
  }
  return a;
};

const factorial = function(n) {
  let total = 1;
	for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
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
