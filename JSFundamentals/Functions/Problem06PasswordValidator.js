function isValidPassword(password) {
    let isValidLenght = false;
    let isOnlyLettersAndDigits = true;
    let isCountinesLeastTwoLetAndDig = false;

    if (password.length >= 6 && password.length <= 10) {
        isValidLenght = true;
    }

    let lettersCount = 0;
    let digitsCount = 0;

    for (let i = 0; i < password.length; i++) {
        let symbol = password[i];

        if (symbol >= '0' && symbol <= '9') {
            digitsCount++;

        } else if ((symbol >= 'A' && symbol <= 'Z') || (symbol >= 'a' && symbol <= 'z')) {
            lettersCount++;
        } else {
            isOnlyLettersAndDigits = false;
        }

    }

    if (lettersCount >= 2 && digitsCount >= 2) {
        isCountinesLeastTwoLetAndDig = true;
    }

    if (isValidLenght && isOnlyLettersAndDigits && isCountinesLeastTwoLetAndDig) {
        console.log('Password is valid');

    } else {
        if (!isValidLenght) {
            console.log('Password must be between 6 and 10 characters');
        }

        if (!isOnlyLettersAndDigits) {
            console.log('Password must consist only of letters and digits');
        }

        if (!isCountinesLeastTwoLetAndDig) {
            console.log('Password must have at least 2 digits');
        }
    }
}

isValidPassword('MyPass123');
console.log('----------------------------------------------');
isValidPassword('logIn');