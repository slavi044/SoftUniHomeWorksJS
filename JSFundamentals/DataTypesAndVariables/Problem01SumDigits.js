function sumNumberDigits(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        
        number = parseInt(number / 10);
    }
    
    console.log(sum);
}

sumNumberDigits(245678);
sumNumberDigits(97561);
sumNumberDigits(543);