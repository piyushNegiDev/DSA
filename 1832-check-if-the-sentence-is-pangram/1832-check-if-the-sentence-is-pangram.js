/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    // let freq = Array.from({ length: 26 }, () => 0);;

    let map = new Map();

    for(let char of sentence) {
        // freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;

        map.set(char, 0);
    }


    return map.size === 26;

    // for(let i = 0; i < freq.length; i++) {
    //     if(freq[i] === 0) {
    //         return false;
    //     }
    // }

    // return true;
};