function searchForANumber(numbers, commands) {
    let myNumbers = numbers.splice(0, commands[0]);

    for (let i = 0; i < commands[1]; i++) {
        myNumbers.shift();

    }

    let counter = 0;

    for (let i = 0; i < myNumbers.length; i++) {
        
        if (commands[2] === myNumbers[i]) {
            counter++;
        }
        
    }

    console.log(`Number ${commands[2]} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);