/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(i);
        } else {
            let top = stack.pop();

            if(stack.length === 0) {
                ans += s.slice(top + 1, i);
            }
        }
    }

    return ans;
};