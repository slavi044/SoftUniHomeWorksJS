function bottles(array) {
    let repository = {};
    let bottlesRepository = {};

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" => ");
        let type = tokens[0];
        let quantity = Number(tokens[1]);

        if (!repository.hasOwnProperty(type)) {
            repository[type] = 0;
        }

        repository[type] += quantity;

        if (repository[type] >= 1000) {
            if (!bottlesRepository.hasOwnProperty(type)) {
                bottlesRepository[type] = 0;
            }
            let bottles = Math.floor(repository[type] / 1000)
            bottlesRepository[type] += bottles;
            repository[type] -= (bottles * 1000);
        }
    }

    bottlesRepository = Object.entries(bottlesRepository).sort(function (a, b) {
        return b[0] - a[0];
    });

    for (const [key, value] of bottlesRepository) {
        if (value > 0) {
            console.log(`${key} => ${value}`);
        }
    }
};

bottles([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

bottles([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);