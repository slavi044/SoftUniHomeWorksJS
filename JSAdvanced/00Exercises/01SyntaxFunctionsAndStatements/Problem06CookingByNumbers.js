function CookingByNumbers(commands) {
    let number = Number(commands.shift());

    while (commands.length > 0) {
        let command = commands.shift();

        if (command === 'chop') {
            number /= 2;
            console.log(number);

        } else if (command === 'dice') {
            number = number ^ number;
            console.log(number);

        } else if (command === 'spice') {
            number += 1;
            console.log(number);

        } else if (command === 'bake') {
            number *= 3;
            console.log(number);

        } else if (command === 'fillet') {
            number *= 0.2;
            console.log(number);

        }
    }
}

CookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);