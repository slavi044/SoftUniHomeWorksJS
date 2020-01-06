function replaceRepeatingChars(str) {
    str = str.split(''); 

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            str.splice(i, 1);
            i--;
        } 
        
    }

    console.log(str.join(''));    
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');