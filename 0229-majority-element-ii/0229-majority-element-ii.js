/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
      let n = nums.length;
      let min = Math.floor(n/3) + 1;
      let ans = [];
      let count1 = 0, count2 = 0;
      let elem1, elem2;

      for(let i = 0; i < n; i++) {
        if(count1 === 0 && nums[i] !== elem2) {
            count1++;
            elem1 = nums[i]
        } else if (count2 === 0 && nums[i] !== elem1) {
            count2++;
            elem2 = nums[i];
        } else if(elem1 === nums[i]) {
            count1++;
        } else if(elem2 === nums[i]) {
            count2++;
        } else {
            count1--;
            count2--;
        }
      }

      count1 = 0; count2 = 0;
      for(let i = 0; i < n; i++) {
        if(elem1 === nums[i]) count1++;
        else if (elem2 === nums[i]) count2++
      }

      if(count1 >= min) ans.push(elem1);
      if(count2 >= min) ans.push(elem2);

      return ans;
};