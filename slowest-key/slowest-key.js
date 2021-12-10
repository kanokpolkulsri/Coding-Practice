/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let pos=0, max=releaseTimes[0];
    for(let i=1; i<keysPressed.length; i++) {
        if(releaseTimes[i] - releaseTimes[i-1] > max) {
            max = releaseTimes[i] - releaseTimes[i-1];
            pos = i;
        } else if(releaseTimes[i] - releaseTimes[i-1] === max) {
            pos = keysPressed[i] > keysPressed[pos] ? i : pos;
        }
    }
    return keysPressed[pos];
};