function findEqualSums(array) {
    let sumInLeftSide;
    let sumInRightSide;
    let position = 0;
    let indexThatSatisfies = true;

    for (let i = 0; i < array.length; i++) {

        if (array.length < 2) {
            console.log(0);
            indexThatSatisfies = false;

        }

        sumInLeftSide = 0;
        sumInRightSide = 0;
        position = i + 1;

        for (let j = 0; j <= i; j++) {
            sumInLeftSide += array[j];
        }

        for (let j = i + 2; j < array.length; j++) {
            sumInRightSide += array[j];
        }

        if (sumInLeftSide === sumInRightSide) {
            console.log(position);
            indexThatSatisfies = false;
            break;
        }

    }

    if (indexThatSatisfies) {
        console.log('no');
        
    }
}

findEqualSums([1, 2, 3, 3]);
findEqualSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
findEqualSums([1]);
findEqualSums([1, 2, 3]);