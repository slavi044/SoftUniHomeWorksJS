function pascalCaseSplitter(text) {
    let splitedArray = [];

    for (let i = 1; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            let word = text.substr(0, i);
            
            text = text.replace(word, '');
            
            splitedArray.push(word);
            i = 0;
        }

        if (i + 1 === text.length) {
            splitedArray.push(text);
        }
        
    }

    console.log(splitedArray.join(', '));    
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');