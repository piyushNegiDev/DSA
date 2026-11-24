/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    let maxLen = 0;

    var getGCD = function(largest, smallest) {
        while(largest > 0 && smallest > 0) {
            if(largest > smallest) largest %= smallest;
            else smallest %= largest;
        }

        if(largest === 0) return smallest;
        return largest;
    } 

    var getLCM = (a, b) => (a * b) / getGCD(a, b);

    for(let i = 0; i < nums.length; i++) {
        let product = 1;
        let gcd = 0;
        let lcm = 1;
        for(let j = i; j < nums.length; j++) {
            product *= nums[j];
            if(product > 25200) break;
            gcd = getGCD(gcd, nums[j]);
            lcm = getLCM(lcm, nums[j]);

            if(product === gcd * lcm) maxLen = Math.max(maxLen, j - i + 1);
        }
    }

    return maxLen;
};