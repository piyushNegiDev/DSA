/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let prefixSum = [31];

    for(let i = 1; i < months.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + months[i];
    }

    let aArrive = Number(arriveAlice.slice(3));
    let index = Number(arriveAlice.slice(0, 2)) - 2;
    if(index >= 0) {
        aArrive += prefixSum[index];
    }

    let aLeave = Number(leaveAlice.slice(3));
    index = Number(leaveAlice.slice(0, 2)) - 2;
    if(index >= 0) {
        aLeave += prefixSum[index];
    }

    let bArrive = Number(arriveBob.slice(3));
    index = Number(arriveBob.slice(0, 2)) - 2;
    if(index >= 0) {
        bArrive += prefixSum[index];
    }

    let bLeave = Number(leaveBob.slice(3));
    index = Number(leaveBob.slice(0, 2)) - 2;
    if(index >= 0) {
        bLeave += prefixSum[index];
    }

    let a = aArrive < bArrive ? bArrive : aArrive;
    let b = aLeave < bLeave ? aLeave : bLeave;

    if(b < a) return 0
    return b - a + 1;
};