/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var findNextGreater = function(value) {
        let greater = -1;
        for(let i = 0; i < nums2.length; i++) {
            if(value === nums2[i]) {
                for(let j = i + 1; j < nums2.length; j++) {
                    if(nums2[j] > value) return nums2[j];
                }
            }
        }
        return greater;
    }

    for(let i = 0; i < nums1.length; i++) {
        nums1[i] = findNextGreater(nums1[i]); 
    }

    return nums1;
};