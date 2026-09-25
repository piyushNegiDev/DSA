/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let totalBeauty = 0;

    for(let i = 0; i < s.length; i++) {
        let freq = Array.from({ length: 26 }, () => 0);

        for(let j = i; j < s.length; j++) {
            freq[s[j].charCodeAt(0) - 97]++;

            let maxFreq = 0;
            let minFreq = Infinity;

            for (let k = 0; k < 26; k++) {
                if (freq[k] > 0) {
                    maxFreq = Math.max(maxFreq, freq[k]);
                    minFreq = Math.min(minFreq, freq[k]);
                }
            }

            totalBeauty += (maxFreq - minFreq);
        }
    }

    return totalBeauty;
};