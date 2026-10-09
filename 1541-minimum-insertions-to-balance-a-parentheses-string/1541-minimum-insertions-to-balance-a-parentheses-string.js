/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let right = 0;
    let left = 0;
    let needed = 0;

    for(let char of s) {
        if(char === '(') {
            if(left === 1) {
                if(right === 0) {
                    needed += 2;
                } else {
                    right--;
                    needed++;
                }
            }
            right++;
            left = 0;
        } else {
            left++;
            if(left === 2) {
                if(right === 0) {
                    needed++;
                } else {
                    right--;
                }
                left = 0;
            }
        }
    }  

    if(right !== 0) return needed + right * 2 - left;
    return needed + left * 2;
};