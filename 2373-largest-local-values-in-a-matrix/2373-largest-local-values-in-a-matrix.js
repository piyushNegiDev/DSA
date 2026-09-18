/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var value = function(r, c, gird) {
    let max = 0;

    for(let i = r - 1; i <= r + 1; i++) {
        for(let j = c - 1; j <= c + 1; j++) {
            max = Math.max(max, gird[i][j]);
        }
    }

    return max;
}

var largestLocal = function(grid) {
    let n = grid.length;
    let maxLocal = Array.from({ length: n - 2 }, () => new Array(n - 2).fill(0)); 

    for(let i = 0; i < n - 2; i++) {
        for(let j = 0; j < n - 2; j++) {
            maxLocal[i][j] = value(i + 1, j + 1, grid);
        }
    }

    return maxLocal;
};