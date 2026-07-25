/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let a = 0;
    let b = 0;
    while(n > 0) {
        let last = n % 10;
        if(last >= a) {
            b = a;
            a = last;
        } else if (last > b && last < a) {
            b = last;
        }
        n = Math.trunc(n/10);
    }
    return a * b;
};