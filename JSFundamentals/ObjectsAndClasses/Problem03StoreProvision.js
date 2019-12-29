function delivery(currnetStock, delivery) {
    let stocks = [];
    let stocksQuantity = [];
    let store = {};

    for (let i = 0; i < currnetStock.length; i++) {
        if (i % 2 === 0) {
            stocks.push(currnetStock[i]);
        } else {
            stocksQuantity.push(currnetStock[i]);
        }
    }

    for (let i = 0; i < stocks.length; i++) {
        store[stocks[i]] = Number(stocksQuantity[i]);
    }

    stocks = [];
    stocksQuantity = [];
    
    for (let i = 0; i < delivery.length; i++) {
        if (i % 2 === 0) {
            stocks.push(delivery[i]);
        } else {
            stocksQuantity.push(delivery[i]);
        }
    }

    for (let i = 0; i < stocks.length; i++) {
        if (store.hasOwnProperty(stocks[i])) {
            store[stocks[i]] += Number(stocksQuantity[i]);
        } else {
            store[stocks[i]] = Number(stocksQuantity[i]);
        }
    }

    for (const [stock, value] of Object.entries(store)) {
        console.log(`${stock} -> ${value}`);
        
    }
}

delivery(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);