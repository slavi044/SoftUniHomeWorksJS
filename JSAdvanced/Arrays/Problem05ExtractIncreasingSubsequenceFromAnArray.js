function ExtractElementsFromAnArray(array) {
    console.log(array[0]);
    let number = array[0];
    
    for (let i = 0; i < array.length; i++) {
        
        if (array.length - 1 >= i + 1) {
            if (number <= array[i + 1]) {
                console.log(array[i + 1]);
                number = array[i + 1];            
            }
        }
    }
};

ExtractElementsFromAnArray([
    1, 3, 8, 4, 10, 12, 3, 2, 24
]);
console.log('----------------');
ExtractElementsFromAnArray([
    20, 3, 2, 15, 6, 1, 21, 3
]);