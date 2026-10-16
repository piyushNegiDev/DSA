/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    var helper = function(row, col, k) {
        if(k === word.length) return true;

        if(!(row >= 0 && row < board.length) || !(col >= 0 && col < board[0].length)) return false;

        if(word[k] !== board[row][col]) return false;

        let temp = board[row][col];

        board[row][col] = '#';

        let found = helper(row, col + 1, k + 1) || helper(row, col - 1, k + 1) || helper(row + 1, col, k + 1) || helper(row - 1, col, k + 1);

        board[row][col] = temp;

        return found;
    }

    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++) {
            if(helper(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
};