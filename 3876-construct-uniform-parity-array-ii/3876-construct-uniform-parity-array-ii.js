/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let n = nums1.length;
    if(n === 1) return true;
    
    let smallestEven = Infinity;
    let smallestOdd = Infinity;

    let evenCount = 0;
    let oddCount = 0;

    for(let i = 0; i < n; i++) {
        if(nums1[i] % 2 === 0 && nums1[i] < smallestEven) {
            smallestEven = nums1[i];
        } else if(nums1[i] % 2 !== 0 && nums1[i] < smallestOdd) {
            smallestOdd = nums1[i];
        }
    }

    if(smallestEven > smallestOdd || smallestOdd === Infinity) return true;
    
    return false;
};