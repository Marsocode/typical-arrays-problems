// jshint esversion:6

exports.min = function min (array) {
	if (typeof array === 'undefined') return 0;
  if (array.length === 0) return 0;
  
  let minValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }
  return minValue;
};

exports.max = function max (array) {
  if (typeof array === 'undefined') return 0;
  if (array.length === 0) return 0;

  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue;
};

exports.avg = function avg (array) {
  if (typeof array === 'undefined') return 0;
  if (array.length === 0) return 0;

  let result = array.reduce((total, currentValue) => {
    return (total + currentValue);
  }, 0) / array.length;

  return result;
};