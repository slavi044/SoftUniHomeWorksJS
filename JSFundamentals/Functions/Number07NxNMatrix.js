function NxNMatrix(N) {
    let row = `${N}`;

    for (let i = 0; i < N - 1; i++) {
        row += ` ${N}`;
        
    }

    for (let i = 0; i < N; i++) {
        console.log(row);

    }
}

NxNMatrix(2);
console.log('-------------------');
NxNMatrix(3);