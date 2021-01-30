function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            newArr.push(i + 1);

        } else if (arr[i] === 'remove') {
            if (newArr.length !== 0) {
                newArr.pop();
            }
        }
    }

    if (newArr.length > 0) {
        newArr.forEach(e => {
            console.log(e);
        });

    } else {
        console.log('Empty');
    }
}

solve([ 'add', 'add', 'add', 'add' ]);
console.log('----------------');
solve([ 'add', 'add', 'remove', 'add', 'add' ]);
console.log('----------------');
solve([ 'remove', 'remove', 'remove' ]);