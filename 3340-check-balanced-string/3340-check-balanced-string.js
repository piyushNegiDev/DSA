/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let sum = 0;

    for(let i = 0; i < num.length; i++) { 
        if(i % 2 === 0) {
            sum += Number(num[i]);
        } else {
            sum -= Number(num[i]);
        }
    }

    return sum === 0;
};