/**
 * @param {number} n
 * @return {string[]}
 */
var getAnswer = function(n, s, ans, open, close) {
    if(n === open && close === n) {
        ans.push(s);
        return
    }

    if(n > open) {
        getAnswer(n, s + '(', ans, open + 1, close);
    }

    if(open > close) {
        getAnswer(n, s + ')', ans, open, close + 1);
    }
    
}

var generateParenthesis = function(n) {
    let ans = [];
    getAnswer(n, '', ans, 0, 0);
    return ans;
};