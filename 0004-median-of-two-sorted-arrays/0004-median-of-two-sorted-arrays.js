/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if(nums1[i] <= nums2[j]) {
            arr.push(nums1[i]);
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        arr.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        arr.push(nums2[j]);
        j++;
    }

    if(arr.length % 2 !== 0) {
        return arr[Math.trunc(arr.length / 2)];
    }

    i = arr.length / 2;
    j = i - 1;

    return (arr[i] + arr[j]) / 2;
};