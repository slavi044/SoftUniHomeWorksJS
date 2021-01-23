function TimeToWalk(numOfSteps, lenghtOfStdFootprint, stdSpeed) {
    numOfSteps = Number(numOfSteps);
    lenghtOfStdFootprint = Number(lenghtOfStdFootprint);
    stdSpeed = Number(stdSpeed);

    let distanceMeters = numOfSteps * lenghtOfStdFootprint;
    let speedMetersSec = stdSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let restInMin = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.floor(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
    
    // console.log(timeSec);
    // console.log(timeMin + restInMin);
    // console.log(timeHr);

    let date = new Date(0, 0, 0, timeHr, timeMin + restInMin, timeSec);
    console.log(`${(date.getHours() < 10 ? "0" : "")}${date.getHours()}:${(date.getMinutes() < 10 ? "0" : "")}${date.getMinutes()}:${(date.getSeconds() < 10 ? "0" : "")}${date.getSeconds()}`);
}

//TimeToWalk(1000, 1, 10);
TimeToWalk(4000, 0.60, 5);
TimeToWalk(2564, 0.70, 5.5);