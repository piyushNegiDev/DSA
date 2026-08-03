/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let map = new Map();
    let ans = [];

    for(let i = 1; i <= n * n; i++) {
        map.set(i, 0);
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(map.has(grid[i][j])) {
                map.set(grid[i][j], map.get(grid[i][j]) + 1);
            }
        }
    }

    for(let [key, value] of map) {
        if(value === 0) {
            if(ans.length === 0) {
                ans.unshift(key);
            } else {
                ans.push(key);
            }
        }

        if(value === 2) {
            if(ans.length === 0) {
                ans.push(key);
            } else {
                ans.unshift(key);
            }
        }
    }

    return ans;
};