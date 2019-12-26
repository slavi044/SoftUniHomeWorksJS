function removeRepeatingNubmers(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        let numberCounter = -1;

        for (let j = 0; j < array.length; j++) {
            if (array[j] === number) {
                numberCounter++;

                if (numberCounter >= 1) {
                    array.splice(j, 1);
                    break;
                }
            }
        }
    }

    console.log(`${array.join(' ')}`);
}

removeRepeatingNubmers([7, 8, 9, 7, 2, 3, 4, 1, 2]);