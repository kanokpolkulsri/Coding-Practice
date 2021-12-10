/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    /*let start = intervals.sort((a,b) => {return a[0]-b[0]});
    let end = intervals.sort((a,b) => {return a[1]-b[1]});
    let room=0, endi=0;
    
    for(let i=0; i<intervals.length; i++) {
        start[i][0] < end[endi][1] ? room++ : endi++;
    }
    return room;
    */
    var starts = intervals.slice().sort((a, b) => a[0] - b[0]);
    var ends = intervals.sort((a, b) => a[1] - b[1]);

    var rooms = 0;
    var end = 0;

    for (var start = 0; start < intervals.length; start++) {
		starts[start][0] < ends[end][1] ? rooms++ : end++;
    }

    return rooms;
};