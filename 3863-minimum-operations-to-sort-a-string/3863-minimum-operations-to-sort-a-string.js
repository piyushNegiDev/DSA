/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let isSorted = true;
    let minChar = 'z';
    let maxChar = 'a';

    for(let i = 0; i < s.length; i++) {
        if(i > 0 && s[i - 1] > s[i]) {
            isSorted = false;
        }

        if(minChar > s[i]) {
            minChar = s[i];
        }  
        
        if (maxChar < s[i]) {
            maxChar = s[i];
        }
    }

    if(isSorted) return 0;
    if(s.length === 2) return -1;
    if(s.startsWith(minChar) || s.endsWith(maxChar)) return 1;

    let minCount = 0;
    let maxCount = 0;

    for(let i = 0; i < s.length; i++) {
        if(minChar === s[i]) minCount++;
        if(maxChar === s[i]) maxCount++;
    }

    if((s.startsWith(maxChar) && maxCount === 1) && (s.endsWith(minChar) && minCount === 1)) return 3;
    return 2;
};