/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let ans = 1;
    let num = n;

    if(num < 0) num *= -1;

    while(num) {
        if(num % 2) {
            ans *= x;
            num--;
        } else {
            x *= x;
            num /= 2;
        }
    }

    if(n < 0) return 1 / ans;
    return ans;
};