function solve(number) {
    let currentN = number % 10;
    let sum = 0;
    let areAllNumbersSame = true;

    while (number > 0) {
        let residue = number % 10;
        number = parseInt(number / 10);
        sum += residue;

        if (residue !== currentN) {
            areAllNumbersSame = false;
        }    
    }

    console.log(areAllNumbersSame);
    console.log(sum);    
}

solve(2222222);
solve(1234);