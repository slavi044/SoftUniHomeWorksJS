function findNumbersWhichSumIsMagic(array, magicSum) {
    for (let i = 0; i < array.length - 1; i++) {
       
        for (let j = i + 1; j < array.length; j++) {
            
            if (array[i] + array[j] == magicSum) {
                console.log(`${array[i]} ${array[j]}`);
            }
            
        }
    }
}

findNumbersWhichSumIsMagic([1, 7, 6, 2, 19, 23], 8);
console.log('------');
findNumbersWhichSumIsMagic([14, 20, 60, 13, 7, 19, 8], 27);
console.log('------');
findNumbersWhichSumIsMagic([1, 2, 3, 4, 5, 6], 6);