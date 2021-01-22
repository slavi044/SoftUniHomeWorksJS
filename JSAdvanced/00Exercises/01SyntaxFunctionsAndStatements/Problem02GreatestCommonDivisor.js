function GreatestCommonDivisor(firstN, secoundN) {
    for (let i = 10; i > 0; i--) {
        if (firstN % i === 0 && secoundN % i === 0) {
            console.log(i);
            break;
        }
        
    }
}

GreatestCommonDivisor(15, 5);
GreatestCommonDivisor(2154, 458);