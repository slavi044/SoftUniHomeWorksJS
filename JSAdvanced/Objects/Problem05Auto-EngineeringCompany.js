function produsedCars(cars) {
    let carRepository = {};

    for (const car of cars) {
        let tokens = car.split(' | ');
        let brand = tokens[0];
        let model = tokens[1];
        let numberOfCars = Number(tokens[2]);

        if (!carRepository.hasOwnProperty(brand)) {
            carRepository[brand] = {};
            carRepository[brand][model] = 0;

        } else if (!carRepository[brand].hasOwnProperty(model)) {
            carRepository[brand][model] = 0;
        }

        carRepository[brand][model] += numberOfCars;

    }

    carRepository = Object.entries(carRepository)

    for (const [key, value] of carRepository) {
        let obj = Object.entries(value);

        console.log(key);
        for (const [k, v] of obj) {
            console.log(`###${k} -> ${v}`);
        }
                
    }    
};

produsedCars([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);