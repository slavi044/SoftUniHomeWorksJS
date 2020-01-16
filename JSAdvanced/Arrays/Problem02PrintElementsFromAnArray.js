function solve(array) {
    let n = array.splice(array.length - 1);
    for (let i = 0; i < array.length; i++) {
        if (i % n === 0) {
            console.log(array[i]);
            
        }        
    }
};

solve(['5', '20', '31', '4', '20', '2']);