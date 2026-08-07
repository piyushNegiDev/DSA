/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let num = n;
    product = 1;
    while(true) {
        while(num > 0) {
            let last = num % 10;
            product *= last;
            num = Math.trunc(num / 10);
        }
        if(product % t === 0) return n;
        n++;
        product = 1;
        num = n;   
    }
};