
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];

  if (arguments[0] == null) {return []}

  else if (matrix.length === 0) {return []}

  else {

  for (i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      resultArr.push(matrix[i].join(','));
    } else {resultArr.push(matrix[i].reverse().join(','))};
  };

  resultArr = resultArr.join(',').split(',');

  resultArr.forEach(element => {
    +element;
  });

  return resultArr;
  }

}