function oddAndEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;

    let nToStr = number.toString();

    for (let i = 0; i < nToStr.length; i++) {
        let nToAdd = parseInt(nToStr[i]);

        if (nToAdd % 2 === 0) {
            evenSum += nToAdd;

        } else {
            oddSum += nToAdd;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}

oddAndEvenSum(1000435);