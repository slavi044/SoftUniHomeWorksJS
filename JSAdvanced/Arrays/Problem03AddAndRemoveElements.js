function solve(array) {
    let n = 1;
    let arrToPrint = [];

    while (array.length > 0) {
        let command = array.shift();

        if (command === 'add') {
            arrToPrint.push(n);
        } else if (command === 'remove') {
            if (arrToPrint.length > 0) {
                arrToPrint.pop();
            }
        }

        n++;
    }

    if (arrToPrint.length > 0) {
        for (const number of arrToPrint) {
            console.log(number);
            
        }
    } else {
        console.log('Empty');
        
    }

};

solve(['add', 'add', 'add', 'add']);
console.log('--------------');
solve(['add', 'add', 'remove', 'add', 'add']);
console.log('--------------');
solve(['remove', 'remove', 'remove']);