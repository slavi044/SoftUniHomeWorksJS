function roadRadar(info) {
    let speed = Number(info.shift());
    let area = info.shift();

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const sityLimit = 50;
    const residentialLimit = 20;

    if (area === 'motorway') {
        let exceeding = speed - motorwayLimit;       

        if (exceeding < 20 && exceeding > 0) {
            console.log('speeding');
        }
        else if (exceeding > 20 && exceeding <= 40) {
            console.log('excessive speeding');
        } else if (exceeding > 40) {
            console.log('reckless driving');
        }

    } else if (area === 'interstate') {
        let exceeding = speed - interstateLimit;       

        if (exceeding < 20 && exceeding > 0) {
            console.log('speeding');
        }
        else if (exceeding > 20 && exceeding <= 40) {
            console.log('excessive speeding');
        } else if (exceeding > 40) {
            console.log('reckless driving');
        }

    } else if (area === 'city') {
        let exceeding = speed - sityLimit;       

        if (exceeding < 20 && exceeding > 0) {
            console.log('speeding');
        }
        else if (exceeding > 20 && exceeding <= 40) {
            console.log('excessive speeding');
        } else if (exceeding > 40) {
            console.log('reckless driving');
        }

    } else if (area === 'residential') {
        let exceeding = speed - residentialLimit;       

        if (exceeding < 20 && exceeding > 0) {
            console.log('speeding');
        }
        else if (exceeding > 20 && exceeding < 40) {
            console.log('excessive speeding');
        } else if (exceeding > 40) {
            console.log('reckless driving');
        }
    }

}

roadRadar([140, 'motorway']);
roadRadar([151, 'motorway']);
roadRadar([240, 'city'])