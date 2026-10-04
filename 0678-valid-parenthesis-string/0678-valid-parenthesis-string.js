/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let low = 0, high = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            low++;
            high++;
        } else if (s[i] === ')') {
            low--;
            high--;
        } else {
            low--;
            high++;
        }

        if(low < 0) low = 0;
        if(high < 0) return false;
    }

    return low === 0;
};