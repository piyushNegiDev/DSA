/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let carry = k;
    for(let i = num.length - 1; i >= 0; i--) {
        num[i] = num[i] + carry;
        carry = 0;
        if(num[i] > 9) {
            let last = num[i] % 10;
            carry = Math.trunc(num[i] / 10);
            num[i] = last;
        }
    }
    while (carry > 0) {
        let last = carry % 10;
        num.unshift(last);
        carry = Math.trunc(carry / 10);
    }

    return num;
};