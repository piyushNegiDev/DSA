/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    let ans = 0;

    var helper = function(row, col) {
        let sum = grid[row][col];

        grid[row][col] = 0;

        if(row + 1 < grid.length && grid[row + 1][col] !== 0) {
            sum += helper(row + 1, col);
        }

        if(col + 1 < grid[row].length && grid[row][col + 1] !== 0) {
            sum += helper(row, col + 1);
        }

        if(row - 1 >= 0 && grid[row - 1][col] !== 0) {
            sum += helper(row - 1, col);
        }

        if(col - 1 >= 0 && grid[row][col - 1] !== 0) {
            sum += helper(row, col - 1);
        }


        return sum
    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] !== 0) {
                if(helper(i, j) % k === 0) {
                    ans++;
                }
            }
        }
    }

    return ans;
};