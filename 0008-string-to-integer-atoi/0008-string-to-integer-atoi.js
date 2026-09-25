/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();

    let isNegative = 1;
    let isStartWithZero = true;
    let isFirstNum = true;
    let num = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '-' && i === 0) {
            isNegative *= -1;
        } else if (s[i] === '+' && i === 0) {

        } else if(s[i] === '0' && isStartWithZero) {

        } else if (/[0-9]/.test(s[i]) && isFirstNum) {
            isStartWithZero = false;
            isFirstNum = false;
            num += Number(s[i]);
        } else if (/[0-9]/.test(s[i])) {
            if(s[i] === 0) num * 10;
            else num = num * 10 + Number(s[i]);
        } else {
            break;
        }
    }

    num *= isNegative;
    let range = Math.pow(2, 31);

    if(num >= range * -1 && range - 1 >= num) return num; 

    if(num < range * -1) return range * -1

    if(num > range - 1) return range - 1; 

    return 0;
};