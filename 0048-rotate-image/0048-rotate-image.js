/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var reverse = function(row) {
    let left = 0;
    let right = row.length - 1;

    while (left < right) {
        [row[left], row[right]] = [row[right], row[left]];
        left++;
        right--;
    }
}

var rotate = function(matrix) {
    let n = matrix.length;

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
        reverse(matrix[i]);
    }
};