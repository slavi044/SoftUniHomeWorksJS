function purchase(fruit, quantity, price){
    quantity = Number(quantity);
    quantity /= 1000;
    price = Number(price);

    let fruitPrice = quantity * price;
    
    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${quantity.toFixed(2)} kilograms ${fruit}.`);
    
}

purchase('orange', 2500, 1.8);