function solve(array) {
    let calorieObject = {};

    while (array.length > 0) {
        let food = array.shift();
        let calories = array.shift();

        calorieObject[food] = calories;
    }

    let str = `{ `;

    for (const key in calorieObject) {
        str += `${key}: ${calorieObject[key]}, `
    }

    str = str.substr(0, str.length - 2);
    str += ` }`;

    console.log(str);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);