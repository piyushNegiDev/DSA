/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let shorter;
  let greater;  
  let map = new Map();
  let ans = [];

  if (nums1.length < nums2.length) {
    shorter = nums1;
    greater = nums2;
  } else {
    shorter = nums2;
    greater = nums1;
  }

  for (let i = 0; i < shorter.length; i++) {
    map.set(shorter[i], 0);
  }

  for (let i = 0; i < greater.length; i++) {
    if (map.has(greater[i]) && map.get(greater[i]) === 0) {
      map.set(greater[i], 1);
      ans.push(greater[i]);
    }
  }

  return ans;
};