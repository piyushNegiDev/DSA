/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let firstPointerCounter = 1;
  let secondPointerCounter = 1;
  let output = 0;
  for (let i = 0; i < sentences.length / 2; i++) {
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === " ") {
        firstPointerCounter++;
      }
    }
    for (let j = 0; j < sentences[sentences.length - i - 1].length; j++) {
      if (sentences[sentences.length - i - 1][j] === " ") {
        secondPointerCounter++;
      }
    }
    if (Math.max(firstPointerCounter, secondPointerCounter) >= output) {
      output = Math.max(firstPointerCounter, secondPointerCounter);
    }
    firstPointerCounter = 1;
    secondPointerCounter = 1;
  }
  return output;
};