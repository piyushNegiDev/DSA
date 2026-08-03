/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let n = grid.length;
    let N = n * n;

    let expectedSum = N * (N + 1) / 2;
    let expectedSquareSum = N * (N + 1) * (2 * N + 1) / 6;

    let sum = 0;
    let squareSum = 0;

    for (let row of grid) {
        for (let num of row) {
            sum += num;
            squareSum += num * num;
        }
    }

    let diff = sum - expectedSum;
    let sumOfNumbers = (squareSum - expectedSquareSum) / diff;

    let repeated = (diff + sumOfNumbers) / 2;
    let missing = sumOfNumbers - repeated;

    return [repeated, missing];
};