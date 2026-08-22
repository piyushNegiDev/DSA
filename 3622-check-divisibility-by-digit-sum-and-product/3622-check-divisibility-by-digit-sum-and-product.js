/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let num = n;
    let sum = 0;
    let product = 1;

    while(num > 0) {
        let last = num % 10;
        sum += last;
        product *= last;
        num = Math.trunc(num / 10);
    }

    return !(n % (sum + product));
};