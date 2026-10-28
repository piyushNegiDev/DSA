/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    let grid = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

    var helper = function(row, col) {
        if(row === m - 1 && col === n - 1) {
            grid[row][col] = '.';
            return;
        }

        if(col + 1 < grid[row].length) {
            grid[row][col] = '.';
            helper(row, col + 1);
        } else if (row + 1 < grid.length) {
            grid[row][col] = '.';
            helper(row + 1, col);
        }
    }

    helper(0, 0);

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 0) {
                grid[i][j] = '#';
            }
        }
        grid[i] = grid[i].join('');
    }

    return grid;
};