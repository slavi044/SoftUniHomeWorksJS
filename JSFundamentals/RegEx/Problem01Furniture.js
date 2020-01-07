function purchase(array) {
    console.log('Bought furniture:');

    let totalMoney = 0;

    for (const command of array) {
        let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+[\.|\d]\d*)!(?<quantity>\d+)/g;
        let result = pattern.exec(command);

        while (result !== null) {
            let name = result.groups['name'];
            let price = result.groups['price'];
            price = Number(price);
            let quantity = result.groups['quantity'];
            quantity = Number(quantity);

            console.log(name);
            
            totalMoney += quantity * price;
            result = pattern.exec(command);
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
};

purchase([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);