/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while(n > 0) {
        if(n === 1) return true;
        n = n / 2;
    }

    return false;
};