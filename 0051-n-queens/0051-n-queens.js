/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ans = [];

    var canBePlace = function(row, col, sol) {
        if(row === 0) return true;

        for(let i = row - 1; i >= 0; i--) {
            if(sol[i][col] === 'Q') return false;
        }

        for (let i = col - 1, r = row - 1; i >= 0 && r >= 0; i--, r--) { 
            if (sol[r][i] === 'Q') return false; 
        }

        for(let i = row - 1, c = col + 1; i >= 0 && c < n; i--, c++) {
            if(sol[i][c] === 'Q') return false;
        }

        return true;
    }

    var helper = function(row, sol, placed) {
        if(placed === n) {
            for(let i = 0; i < sol.length; i++) {
                sol[i] = sol[i].join('');
            }

            ans.push([...sol]);

            for(let i = 0; i < sol.length; i++) {
                sol[i] = sol[i].split('');
            }

            return;
        }

        let temp = placed;

        for(let i = 0; i < n; i++) {
            if(canBePlace(row, i, sol)) {
                let s = [];

                for(let j = 0; j < n; j++) {
                    if(j === i) {
                        s.push('Q');
                    } else {
                        s.push('.');
                    }
                }
                
                sol.push(s);
                helper(row + 1, sol, placed + 1);
                sol.pop();
            }
        }

       
    }

    helper(0, [], 0);

    return ans;
};