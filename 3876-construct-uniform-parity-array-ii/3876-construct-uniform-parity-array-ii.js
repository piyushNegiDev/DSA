/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {    
    let smallestEven = Infinity;
    let smallestOdd = Infinity;

    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] % 2 === 0) {
            smallestEven = Math.min(nums1[i], smallestEven)
        } else {
            smallestOdd = Math.min(nums1[i], smallestOdd)
        }
    }
    
    return smallestEven > smallestOdd || smallestOdd === Infinity;
};