/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let ans = 0;
    let powerOfFive = 1;
    
    while(true) {
        powerOfFive *= 5;
        if(n < powerOfFive) {
            return ans;
        }
        ans += Math.floor(n / powerOfFive);
    }
};