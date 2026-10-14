/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = {
        '2' : ['a','b','c'],
        '3' : ['d','e','f'],
        '4' : ['g','h','i'],
        '5' : ['j','k','l'],
        '6' : ['m','n','o'],
        '7' : ['p','q','r','s'],
        '8' : ['t','u','v'],
        '9' : ['w','x','y','z'],
    }
    let ans = [];

    var helper = function (s, digit) {
        if(s.length === digits.length) {
            ans.push(s);
            return;
        }

        let currDigit = digits[digit];

        for(let i = 0; i < map[currDigit].length; i++) {
            s += map[currDigit][i];
            helper(s, digit + 1);
            s = s.slice(0, -1);
        }
    }
    
    
    helper('',0);
    return ans;
};