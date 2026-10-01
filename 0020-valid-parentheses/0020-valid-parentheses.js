/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    let storage = {
        '{' : '}',
        '(' : ')',
        "[" : ']',         
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '{' || s[i] === '(' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if(storage[top] !== s[i]) return false;
        }
    }

    return stack.length !== 0 ? false : true;
};