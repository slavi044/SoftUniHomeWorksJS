function solve(obj) {
    let engines = {
        SmallEngine: {
            power: 90,
            volume: 1800
        },
        NormalEngine: {
            power: 120,
            volume: 2400
        },
        MonsterEngine: {
            power: 200,
            volume: 3500
        }
    };
    
    let carriage = {
        'Hatchback': {
            type: 'hatchback',
            color: ''
        },
        'Coupe': {
            type: 'coupe',
            color: ''
        }
    };
    
    let car = {
        model: obj.model,
        engine: {},
        carriage: {},
        wheels: []
    };

    if (obj.power <= 90) {
        car.engine = engines.SmallEngine;

    }else if (obj.power <= 120) {
        car.engine = engines.NormalEngine;
    
    } else {
        car.engine = engines.MonsterEngine;
    }

    if (obj.carriage === 'hatchback') {
        car.carriage = carriage.Hatchback;
        
    } else if (obj.carriage === 'coupe') {
        car.carriage = carriage.Coupe;
        
    }

    car.carriage.color = obj.color;

    if (obj.wheelsize % 2 === 0) {
        car.wheels = [obj.wheelsize - 1, obj.wheelsize - 1, obj.wheelsize - 1, obj.wheelsize - 1];

    } else {
        car.wheels = [obj.wheelsize , obj.wheelsize , obj.wheelsize , obj.wheelsize ];
    }

    return car;
    //return JSON.stringify(car);
};

console.log(solve(
    { model: 'VW Golf II',
      power: 90,
      color: 'blue',
      carriage: 'hatchback',
      wheelsize: 14 
}));

console.log(solve(
    { model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 
}));