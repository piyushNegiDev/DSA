/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var isPalindrome = function(s, left, right) {
    while(left < right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
} 
var maxPalindromes = function(s, k) {
    let n = s.length;
    let left = 0;
    let count = 0;

    while(left < n) {
        let len = left + k - 1;
        if(isPalindrome(s, left, len)) {
            count++;
            left = len + 1;
        } else if (isPalindrome(s, left, len + 1)) {
            count++;
            left = len + 2;
        } 
        else {
            left++;
        }
    }

    return count;
};