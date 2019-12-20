function printAndSum(startN, endN) {
    let sum = 0;
    let numbersOutput = ``;

    for (let i = startN; i <= endN; i++) {
        sum += i;

        numbersOutput +=`${i} `;
    }

    console.log(numbersOutput);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);