/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.prefixSumArr = []
    this.prefixSumArr[0] = this.nums[0];
    for(let i = 1; i < this.nums.length; i++){
        this.prefixSumArr[i] = this.prefixSumArr[i - 1] + this.nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left === 0) return this.prefixSumArr[right];
    return this.prefixSumArr[right] - this.prefixSumArr[left - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */