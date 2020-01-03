function solve(array) {
    let wordsForCount = array.shift().split(' ');
    let wordsAndCount = {};

    for (const word of wordsForCount) {
        wordsAndCount[word] = 0;
    }

    for (const word of array) {
        if (wordsAndCount.hasOwnProperty(word)) {
            wordsAndCount[word]++;
        }
    }

    let sortedWords = Object.entries(wordsAndCount).sort((a, b ) => (b[1] - a[1]))

    for (let word of sortedWords) {
        console.log(`${word[0]} - ${word[1]}`);

    }

}

solve([
    'this sentence', 'In',
    'this', 'sentence',
    'you', 'have',
    'to', 'count',
    'the', 'occurances',
    'of', 'the',
    'words', 'this',
    'and', 'sentence',
    'because', 'this',
    'is', 'your',
    'task'
]);