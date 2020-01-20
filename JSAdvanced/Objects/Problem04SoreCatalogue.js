function orderCatalogue(products) {
    let catalogue = {};

    for (const prduct of products) {
        let tokens = prduct.split(' : ');
        let productName = tokens[0];
        let price = tokens[1];

        catalogue[productName] = price;
    }

    catalogue = Object.entries(catalogue).sort();

    let initialLetter = '';

    for (const [key, value] of catalogue) {
        let letter = key[0];        
        
        if (initialLetter !== letter) {
            initialLetter = letter;
            console.log(letter);
            
        }

        console.log(` ${key}: ${value}`);        

    }
};

orderCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);