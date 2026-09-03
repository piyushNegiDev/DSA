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

    for(let i = 0; i < n; i++) {
        if(nums1[i] % 2 === 0) {
            evenCount++
        } else if(nums1[i] - smallestOdd >= 1) {
            evenCount++
        }

        if(nums1[i] % 2 !== 0) {
            oddCount++;
        } else if(nums1[i] - smallestOdd >= 1) {
            oddCount++;
        }
    }
    if(evenCount === n) return true;
    if(oddCount === n) return true;
    
    return false;
};