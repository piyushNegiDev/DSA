/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let n = nums1.length;
    if(n === 1) return true;
    
    let smallestEven = Infinity;
    let smallestOdd = Infinity;

    let evenArr = [];
    let oddArr = [];

    for(let i = 0; i < n; i++) {
        if(nums1[i] % 2 === 0 && nums1[i] < smallestEven) {
            smallestEven = nums1[i];
        } else if(nums1[i] % 2 !== 0 && nums1[i] < smallestOdd) {
            smallestOdd = nums1[i];
        }
    }

    for(let i = 0; i < n; i++) {
        if(nums1[i] % 2 === 0) {
            evenArr.push(nums1[i]);
        } else if(nums1[i] - smallestOdd >= 1) {
            evenArr.push(nums1[i] - smallestOdd);
        }

        if(nums1[i] % 2 !== 0) {
            oddArr.push(nums1[i]);
        } else if(nums1[i] - smallestOdd >= 1) {
            oddArr.push(nums1[i] - smallestOdd);
        }
    }
    if(evenArr.length === n) return true;
    if(oddArr.length === n) return true;
    
    return false;
};