function OrderAlphabetically(array) {
    array = array.sort();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "" || array[i] ===" " || array[i] === undefined || array[i] === null) {
            array.splice(i, 1);
        }
        
    }

    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`);
        
    }
}

OrderAlphabetically(['John', 'Bob', 'Christina', 'Ema'])