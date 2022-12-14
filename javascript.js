const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	

  const summed = arr.reduce((a,b) => {
    return a + b;
  },0);

  return summed;
};

const multiply = function(arr) {
  const mult = arr.reduce((a,b) => {
    return a * b;
  },1);

  return mult
};



const divide = function(arr) {
    const div = arr.reduce((a,b) => {
        return a / b;
    }, 0);
    
    return div;
}






const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}