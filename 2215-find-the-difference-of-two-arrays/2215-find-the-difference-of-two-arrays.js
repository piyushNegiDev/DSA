/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);

    let ans1 = [...nums1].filter(n => !nums2.has(n));
    let ans2 = [...nums2].filter(n => !nums1.has(n));

    return [ans1, ans2];
};