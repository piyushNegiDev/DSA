/**
 * @param {string} s
 * @return {number}
 */
var minAndMax = function(map){
    let maxF = -Infinity;
    let minF = Infinity;

    for(const [key, value] of map) {
        maxF = Math.max(maxF, value);
        minF = Math.min(minF, value);
    }

    return {maxF, minF};
}

var beautySum = function(s) {
    let beautySum = 0;

    for(let i = 0; i < s.length; i++) {
        let map = new Map();

        for(let j = i; j < s.length; j++) {
            map.set(s[j], (map.get(s[j]) || 0) + 1);

            if(map.size > 1) {
                let {maxF, minF} = minAndMax(map);
                beautySum += maxF - minF;
            }
        }
    }

    return beautySum;
};