function printArrayWithGivenDelimiter(array) {
    let delimiter = array.splice(array.length - 1);
    console.log(array.join(delimiter));

};

printArrayWithGivenDelimiter([
    'One', 'Two', 'Three', 'Four', 'Five', '-'
]);