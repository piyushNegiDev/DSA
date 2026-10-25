/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    var canBeFillWith = function(row, col, num) {
        num = String(num);
        
        for(let i = 0; i < board[row].length; i++) {
            if(board[row][i] === num) return false;
        }

        for(let i = 0; i < board.length; i++) {
            if(board[i][col] === num) return false;
        }

        let rowStart = Math.floor(row / 3) * 3;
        let rowEnd = rowStart + 3;
         
        let colStart = Math.floor(col / 3) * 3;
        let colEnd = colStart + 3;

        for(let i = rowStart; i < rowEnd; i++) {
            for(let j = colStart; j < colEnd; j++) {
                if(board[i][j] === num) return false;
            }
        }

        return true;
    }

    var helper = function(row, col) {
        if(row === 9) {
            return true;
        }

        if(board[row][col] === '.') {
            let backValue = false;

            for(let i = 1; i <= 9; i++) {
                if(canBeFillWith(row, col, i)) {
                    board[row][col] = String(i);

                    if(col === 8) {
                        backValue = helper(row + 1, 0);
                    } else {
                        backValue = helper(row, col + 1);
                    }

                    if(!backValue) {
                        board[row][col] = '.';
                    } else {
                        return true;
                    }
                }
            }

            return backValue;
        } else if (col === 8) {
            return helper(row + 1, 0);
        } else {
            return helper(row, col + 1);
        }
    }    

    helper(0, 0);
};