/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    let grid = Array.from({ length: m }, () => Array.from({ length: n }, () => '#'));

    for(let i = 0; i < n; i++) {
        grid[0][i] = '.';
    }

    grid[0] = grid[0].join('');

    if(m > 1) {
        for(let i = 1; i < m; i++) {
            grid[i][n - 1] = '.';
            grid[i] = grid[i].join('');
        }
    }

    return grid;
};