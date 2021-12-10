/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let start = intervals.slice().sort((a,b) => {return a[0]-b[0]});
    let end = intervals.sort((a,b) => {return a[1]-b[1]});
    let room=0, endi=0;
    
    for(let i=0; i<intervals.length; i++) {
        start[i][0] < end[endi][1] ? room++ : endi++;
    }
    return room;
    
};