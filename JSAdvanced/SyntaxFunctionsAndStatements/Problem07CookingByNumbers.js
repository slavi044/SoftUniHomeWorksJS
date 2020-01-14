function cooking(commands) {
    let number = Number(commands.shift());

    while (commands.length > 0) {
        let command = commands.shift();

        if (command === 'chop') {
            number /= 2;
        } else if (command === 'dice') {
            number = Math.sqrt(number);
        } else if (command === 'spice') {
            number += 1;
        }else if (command === 'bake') {
            number *= 3;
        }else if (command === 'fillet') {
            number = number - (number * 0.2);
        }

        console.log(number);
        
    }
};

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);