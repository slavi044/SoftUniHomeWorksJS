function solve(fruit, weight, price) {
    weight = Number(weight) / 1000;
    price = Number(price)

    let finalPrice = weight * price;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);