function RotateArray(array, nOfRotations) {
    for (let i = 0; i < nOfRotations; i++) {
        let value = array.pop();
        array.unshift(value);
        
    }

    console.log(array.join(' '));
}

RotateArray(['1', '2', '3', '4'], 2);
console.log('-------------------');
RotateArray(['Banana', 'Orange','Coconut', 'Apple'], 15);