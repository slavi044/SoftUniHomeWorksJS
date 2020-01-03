function solve(words) {
    let array = words.split(' ');
    let map = new Map();

    for (let i = 0; i < array.length; i++) {
        let word = array[i].toLowerCase();
        map.set(word, 0);
    }

    for (let i = 0; i < array.length; i++) {
        let word = array[i].toLowerCase();
        
        if (map.has(word)) {
            let oldQuantity = map.get(word);
            map.set(word, oldQuantity + 1);
        }
    }

    let mapToArray = map.entries();
    let outputArr = [];
    
    for (let word of mapToArray) {
        let quality = map.get(word[0]);

        if (quality % 2 !== 0) {
            outputArr.push(word[0]);
        }
    }

    console.log(outputArr.join(' ')); 
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');