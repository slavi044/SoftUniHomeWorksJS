function printChars(startChar, ednChar) {
    let firstChar = startChar.charCodeAt();
    let secoundChar = ednChar.charCodeAt();

    if (firstChar < secoundChar) {
        let strToPrint = `${String.fromCharCode(firstChar + 1)}`

        for (let i = firstChar + 2; i < secoundChar; i++) {
            strToPrint += ` ${String.fromCharCode(i)}`

        }

        return strToPrint;

    } else {
        let strToPrint = `${String.fromCharCode(secoundChar + 1)}`

        for (let i = secoundChar + 2; i < firstChar; i++) {
            strToPrint += ` ${String.fromCharCode(i)}`

        }

        return strToPrint;
        
    }

}

console.log(printChars('a', 'd'));
console.log(printChars('C', '#'));
