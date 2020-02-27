function carFactory(requirements) {
    let car = {
        model: requirements.model,
        engine: {
            power: 0,
            volume: 0
        },
        carriage: {
            type: requirements.carriage,
            color: requirements.color
        },
        wheels: []
    }

    if (requirements.power <= 90) {
        car.engine.power = 90;
        car.engine.volume = 1800;
    } else if (requirements.power <= 120) {
        car.engine.power = 120;
        car.engine.volume = 2400;
    } else if (requirements.power <= 200) {
        car.engine.power = 200;
        car.engine.volume = 3500;
    }

    if (requirements.wheelsize % 2 === 0) {
        requirements.wheelsize -= 1;
    }

    car.wheels.push(requirements.wheelsize);
    car.wheels.push(requirements.wheelsize);
    car.wheels.push(requirements.wheelsize);
    car.wheels.push(requirements.wheelsize);

    return car;
}

console.log(carFactory({ 
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 
}));