/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();

    let sign = 1;
    let num = 0;
    let i = 0;

    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + Number(s[i]);
        i++;
    }

    num *= sign;

    let min = -(2 ** 31);
    let max = 2 ** 31 - 1;

    if (num < min) return min;
    if (num > max) return max;

    return num;
};