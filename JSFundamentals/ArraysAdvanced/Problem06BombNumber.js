function explosion(numbers, bombAndPower) {
    let bomb = bombAndPower[0];
    let power = bombAndPower[1];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === bomb) {
            if (i - power >= 0) {
                numbers.splice(i - power, 2 * power + 1);
                i = -1;
            } else {
                let index = i - power + 2 * power + 1;
                if (index > numbers.length) {
                    index = numbers.length;
                }
                numbers.splice(0, index);
                i = -1;
            }
        }

    }

    let sum = numbers.reduce((a, b) => a + b, 0);
    console.log(sum);
    

}

explosion([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
explosion([1, 4, 4, 2, 8, 9, 1], [9, 3]);
explosion([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);