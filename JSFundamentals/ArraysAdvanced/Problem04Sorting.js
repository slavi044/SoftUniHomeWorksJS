function sorting(inputArr) {
    let result = [];
    let sortedArray = inputArr.map(Number).sort((a, b) => b - a);

    while (sortedArray.length > 0) {
        let firstEl = sortedArray.shift();
        result.push(firstEl);
        
        if (sortedArray.length === 0) {
            break;
        }
    
        let lastEl = sortedArray.pop();
        result.push(lastEl);
    }

    console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);