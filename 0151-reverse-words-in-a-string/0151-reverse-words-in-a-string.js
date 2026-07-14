/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let newS = s.trim().split(" ").filter(Boolean);
  let newSLength = newS.length;
  for (let i = 0; i < Math.floor(newSLength / 2); i++) {
    let temp = newS[i];
    newS[i] = newS[newSLength - i - 1];
    newS[newSLength - i - 1] = temp;
  }
  return newS.join(" ");
};