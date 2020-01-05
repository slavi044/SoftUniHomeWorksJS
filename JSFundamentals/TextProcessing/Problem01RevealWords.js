function solve(words, text) {
    words = words.split(', ');
    for (let i = 0; i < words.length; i++) {
        text = text.replace('*'.repeat(words[i].length), words[i])

    }

    console.log(text);
}

solve('great', 
'softuni is ***** place for learning new programming languages')