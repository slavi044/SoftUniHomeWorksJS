function perfectNum(number) {
    number = Number(number);
    
    let sumDivisior = 0;
   
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            sumDivisior+= i;
        }
    }
    
    if (sumDivisior === number) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNum(28);