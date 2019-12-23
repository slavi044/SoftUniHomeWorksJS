function printSmallestInteger(firstNum, secoundNum, thirthNum) {
    if (firstNum < secoundNum) {
        if (firstNum < thirtNum) {
            console.log(firstNum);
            
        }else{
            console.log(thirthNum);
            
        }
    }else{
        if (secondNum < thirthNum) {
            console.log(secoundNum);
            
        }else{
            console.log(thirthNum);
            
        }
    }
}

printSmallestInteger(1, 2, 3);