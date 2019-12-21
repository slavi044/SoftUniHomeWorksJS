function solve(array) {
    let sumOfInitialArray = 0;

    for (let i = 0; i < array.length; i++) {
        sumOfInitialArray += array[i];

    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] += i;

        } else {
            array[i] -= i;

        }

    }

    let sumOfChangedArray = 0;

    for (let i = 0; i < array.length; i++) {
        sumOfChangedArray += array[i];

    }

    console.log(array);
    console.log(sumOfInitialArray);
    console.log(sumOfChangedArray);

}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);