function RoadRadar(kmH, area) {
    let residentialSpeed = 20;
    let citySpeed = 50;
    let interstateSpeed = 90;
    let motorwaySpeed = 130;

    if (area === 'residential') {
        solve(kmH, residentialSpeed);

    } else if (area === 'city') {
        solve(kmH, citySpeed);
    }
    else if (area === 'interstate') {
        solve(kmH, interstateSpeed);       
    }
    else if (area === 'motorway') {
        solve(kmH, motorwaySpeed);       
    }
}

function solve(kmH, speed) {
    if (kmH > speed) {
        console.log('speeding');

    }else if (kmH > speed + 20) {
        console.log('excessive speeding');
        
    }else if (kmH > speed + 40) {
        console.log('reckless driving');
        
    }
}

RoadRadar(40, "city");
RoadRadar(51, "city");