/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    let map = Array.from({length : 26}, () => 0);

    for(let char of s1) {
        map[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let start = 0;
    let end = s1.length - 1;

    let windowFreq = Array.from({length : 26}, () => 0);
    for(let i = 0; i <= end; i++) {
        windowFreq[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }


    while(end < s2.length) {
        let matches = 0;
        for(let i = 0; i < windowFreq.length; i++) {
            if(map[i] === windowFreq[i]) matches++;
        }

        if(matches === 26) return true;
        if(end === s2.length - 1) return false;

        windowFreq[s2[start].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        windowFreq[s2[end + 1].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        start++;
        end++;
    }
};