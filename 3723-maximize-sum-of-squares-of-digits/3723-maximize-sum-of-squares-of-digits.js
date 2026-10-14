/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    if (sum > 9 * num) return '';
    
    let ans = '';

    while(ans.length !== num) {
        let cur = Math.min(9, sum);
        ans += String(cur);
        sum -= cur;
    }

    return sum === 0 ? ans : '';
};