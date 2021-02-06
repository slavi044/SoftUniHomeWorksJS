function solve(array) {
    let obj = {};
    array = array.sort();
    for (let i = 0; i < array.length; i++) {
        let [product, price] = array[i].split(' : ');
        let letter = product.substr(0, 1);
        
        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = {};
        }
        obj[letter][product] = price;
    }

    for (const letter in obj) {
        console.log(letter);
        for (const prod in obj[letter]) {
            console.log(`  ${prod}: ${obj[letter][prod]}`);
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

console.log('--------------');

solve(['Banana : 2',
    'Rubic`s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);