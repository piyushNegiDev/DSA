/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = [];
    let closed = 0;

    for(let char of s) {
        if(char === '(') {
            stack.push('(');
        } else {
            if(stack.length === 0) {
                closed++;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length + closed;
};