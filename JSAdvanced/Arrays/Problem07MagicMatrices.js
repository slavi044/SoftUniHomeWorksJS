function solve(matrix) {
    
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    for (let i = 1; i < matrix.length; i++) {
        if (sum != matrix.reduce((a, b) => a + b)) {
            isMagic = false;
        }
        
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let sumCol = 0;

        for (let i = 0; i < matrix.length; i++) {
            sumCol += matrix[j][i];    
        }

        if (sumCol !== sum) {
            return false;
        }
    }

    return true;
}

console.log(solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(solve([[1, 0, 0], [0, 0, 1], [1, 0, 0]]));