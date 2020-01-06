function substring(word, text) {
    let array = text.split(' ');

    for (const w of array) {
        if (w.toLowerCase() === word) {
            return word;
        }
    }

    return `${word} not found!`    
}

console.log(
    substring(
        'javascript', 
        'JavaScript is the best programming language'
));

console.log(
    substring(
        'python',
        'JavaScript is the best programming language'
));
