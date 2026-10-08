/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let depth = 0;
    let ans = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            depth++;
            if(depth > 1) {
                ans += s[i];
            }
        } else {
            depth--;
            if(depth > 0) {
                ans += s[i];
            }
        }
    }

    return ans;
};