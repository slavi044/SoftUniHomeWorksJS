function SortingNumbers(array) {
    array = array.sort((a, b) => a - b);

    let firstNumbers = array.splice(0, array.length / 2);
    let sortedArr = [];

    
    for (let i = 0; i < firstNumbers.length; i++) {
        sortedArr.push(firstNumbers[i]);
        if (array.length > 0) {
            sortedArr.push(array.pop());
        }
        
    }

    if (firstNumbers.length > array.length) {
        let n = firstNumbers.length - array.length;

        for (let i = n; i < firstNumbers.length; i++) {
            sortedArr.push(firstNumbers[i]);
            
        }
    }

    return sortedArr;
}

console.log(SortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));