/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;

    let count = 0;
    let prev;
    let current;

    let total = nums1.length + nums2.length;
    let breakPoint = Math.floor(total / 2);
    let isOdd = total % 2 !== 0 ? true : false;
    
    while (i < nums1.length && j < nums2.length && count <= breakPoint) {
        if(nums1[i] <= nums2[j]) {
            prev = current
            current = nums1[i];
            i++;
        } else {
            prev = current;
            current = nums2[j];
            j++;
        }
        count++;
    }

    while (i < nums1.length && count <= breakPoint) {
        prev = current;
        current = nums1[i];
        i++;
        count++;
    }


    while (j < nums2.length  && count <= breakPoint) {
        prev = current;
        current = nums2[j];
        j++;
        count++;
    }
    
    return isOdd ? current : (prev + current) / 2;
};