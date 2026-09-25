/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    
    for(let i = 0; i < s.length; i++) {
        sum += (i + 1) * Math.abs(s[i].charCodeAt(0) - 123);
    }

    return sum;
};