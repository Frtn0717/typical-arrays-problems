
exports.min = function min (array = []) {
  if (array.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
        return Math.min(...array);
      }
  }
}




exports.max = function max (array = []) {
    if (array.length == 0) {
        return 0;
      } else {
        for (let i = 0; i < array.length; i++) {
            return Math.max(...array);
          }
      }

}

exports.avg = function avg (array = []) {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
    };

  if (array.length == 0) {
    return 0;
  } else {
    return array.reduce(reducer) / array.length;
  }
}
