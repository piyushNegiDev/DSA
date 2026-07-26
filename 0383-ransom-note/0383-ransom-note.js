/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split('').sort().join('');
    ransomNote = ransomNote.split('').sort().join('');

    if(ransomNote.length > magazine.length) return false;

    let i = 0;
    let j = 0;

    while (i < ransomNote.length && j < magazine.length) {
        if(ransomNote[i] === magazine[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    
    if(i === ransomNote.length && j <= magazine.length) return true;
    return false;
};