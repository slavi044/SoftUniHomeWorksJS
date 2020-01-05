function findWordWithHashTag(text) {
    text = text.split(' ');

    let wordsWithHashTag = [];

    for (const word of text) {
        let bool = true;

        if (word.startsWith('#')) {
            for (let i = 2; i < word.length; i++) {
                if (word[i].toUpperCase() === word[i].toLowerCase()) {
                    bool = false;
                    break;
                }                
            }

            if (bool) {
                wordsWithHashTag.push(word);
            }            
        }
    }

    for (let i = 0; i < wordsWithHashTag.length; i++) {
        if (wordsWithHashTag[i] === '#') {
            let index = wordsWithHashTag.indexOf(wordsWithHashTag[i]);
            wordsWithHashTag.splice(index, 1);
        }

        wordsWithHashTag[i] = wordsWithHashTag[i].replace('#', '');
    }
    
    wordsWithHashTag.forEach(element => {
        console.log(element);
        
    });  
};

findWordWithHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')