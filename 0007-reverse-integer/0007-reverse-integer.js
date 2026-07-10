/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    let lastDigit;
    while(x!=0){
        lastDigit = x%10;
        x = Math.trunc(x/10);
        reverse = reverse * 10 + lastDigit;
    }
    if (reverse < -(2 ** 31) || reverse > 2 ** 31 - 1) {
    return 0;
}
    return reverse;
};