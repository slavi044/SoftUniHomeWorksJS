function factiorialDivision(firstNum, secoundNum) {
    let factiorialOfFirstNum = 1;
    let factiorialOfSecoundNum = 1;

    for (let i = 1; i <= firstNum; i++) {
        factiorialOfFirstNum *= i;
    }

    for (let i = 1; i <= secoundNum; i++) {
        factiorialOfSecoundNum *= i;
    }

    let result = factiorialOfFirstNum / factiorialOfSecoundNum;

    console.log(`${result.toFixed(2)}`);
    
}

factiorialDivision(6, 2);
console.log('---------------');
factiorialDivision(20, 12)