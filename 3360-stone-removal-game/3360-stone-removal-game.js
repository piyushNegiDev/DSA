/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    if(n < 10) return false;

    for(let i = 10; i > 0; i--) {
        n = n - i;

        if(n < 0 && i % 2 === 0) return false;
        if(n < 0 && i % 2 !== 0) return true;
    }
};