function solve(number) {
    let sumOfDigits = 0;
    let isWithSameDigits = true;
    let digit = number % 10;

    while (true) {
        let lastD = number % 10;
        
        if (number >= 10) {
            //number = parseInt(number / 10);

            sumOfDigits += lastD;
        
            if (digit !== lastD) {
            isWithSameDigits = false;
            }

            if (number <= 1) {
            break;
            }
        } else {
            sumOfDigits += lastD;
            if (number <= 1) {
                break;
            }
        }
        
        number = parseInt(number / 10);
    }
    
    console.log(isWithSameDigits);
    console.log(sumOfDigits);  
}

solve(1234);