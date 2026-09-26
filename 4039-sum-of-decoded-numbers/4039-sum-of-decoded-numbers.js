/**
 * @param {number[]} nums
 * @return {number}
 */
var pow = function(x, n, mod) {
    let ans = 1n;

    x %= mod;

    while(n > 0n) {
        if(n % 2n === 1n) {
            ans = (ans * x) % mod;
            n--;
        } else {
            x = (x * x) % mod;
            n /= 2n;
        }
    }

    return ans;
}

var sumDecoded = function(nums) {
    let sum = 0n;
    const mod = 1000000007n;

    for(let i = 0; i < nums.length; i++) {
        let width = nums[i] % 10;
        let d = Math.floor(nums[i] / 10);

        let digits = Math.floor(Math.log10(d) + 1);
        
        let x = Math.floor(d / Math.pow(10, digits - width));
        let y = Math.floor(d % Math.pow(10, digits - width));

        x = BigInt(x);
        y = BigInt(y)

        sum += pow(x, y, mod);
        sum %= mod;
    }

    return Number(sum);
};