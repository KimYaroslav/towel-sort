
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];

  if (matrix === undefined) return resultArr;

  matrix.forEach((elem, index) => {
    if (index % 2) {elem = elem.reverse();}

    resultArr = resultArr.concat(elem);
  });

  return resultArr;
}