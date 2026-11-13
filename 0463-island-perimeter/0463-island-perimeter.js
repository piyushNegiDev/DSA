/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let perimeter = 0;

  var helper = function(row, col) {
    grid[row][col] = '#';

    if(row - 1 >= 0) {
        if(grid[row - 1][col] === 1) {
            helper(row - 1, col);
        } else if (grid[row - 1][col] === 0) {
            perimeter += 1;
        }
    } else {
        perimeter += 1;
    }

    if(row + 1 < grid.length) {
        if(grid[row + 1][col] === 1) {
            helper(row + 1, col);
        } else if (grid[row + 1][col] === 0) {
            perimeter += 1;
        }
    } else {
        perimeter += 1;
    }

    if(col - 1 >= 0) {
        if(grid[row][col - 1] === 1) {
            helper(row, col - 1);
        } else if (grid[row][col - 1] === 0) {
            perimeter += 1;
        }
    } else {
        perimeter += 1;
    }

    if(col + 1 < grid[row].length) {
        if(grid[row][col + 1] === 1) {
            helper(row, col + 1);
        } else if (grid[row][col + 1] === 0) {
            perimeter += 1;
        }
    } else {
        perimeter += 1;
    }
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
        if(grid[i][j] === 1) {
            helper(i, j);
            return perimeter;
        }
    }
  }

  return 0;  
};