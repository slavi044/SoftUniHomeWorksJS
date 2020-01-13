function timeToWalk(stepsNumber, stepsPerHour, studentSpeed) {
    let distanceMeters = stepsNumber * stepsPerHour;
    let speedMeterSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMeterSec;
    let result = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.floor(time - (time * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" 
    + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" 
    + (timeSec < 10 ? "0" : "") + timeSec);
}