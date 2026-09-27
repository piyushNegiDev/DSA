/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    s = s.split('');

    var reverse = function(left, right) {
        while(left < right) {
            if(s[left] === '(') left++;
            if(s[right] === ')') right--;
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }

    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            let top = stack.pop();

            reverse(top, i);
        }
    }

    return s.filter((e) => e !== '(' && e !== ')').join('');
};