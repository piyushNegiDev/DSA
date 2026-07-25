/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let indexesOfZero = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        indexesOfZero.push(i);
        indexesOfZero.push(j);
      }
    }
  }
  for (let i = 0; i < indexesOfZero.length; i = i + 2) {
    let row = indexesOfZero[i];
    if (indexesOfZero[i - 2] === indexesOfZero[i]) continue;
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }
  }
  for (let i = 1; i < indexesOfZero.length; i = i + 2) {
    let column = indexesOfZero[i];
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][column] = 0;
    }
  }
};