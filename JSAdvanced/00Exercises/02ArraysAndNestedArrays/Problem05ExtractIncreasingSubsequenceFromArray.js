function ExtractIncreasingSubsFromArray(array) {
    let result = [];
    let biggest = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= biggest) {
            result.push(array[i]);
            biggest = array[i];
        }
    }

    return array;
}

console.log(
    ExtractIncreasingSubsFromArray(
        [1, 3, 8, 4, 10, 12, 3, 2, 24])
);
// console.log('----------------');
// console.log(
//     ExtractIncreasingSubsFromArray(
//         [1, 2, 3, 4,])
// );
// console.log('----------------');
// console.log(
//     ExtractIncreasingSubsFromArray(
//         [20, 3, 2, 15, 6, 1])
// );