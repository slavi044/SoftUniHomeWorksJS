function printTriangle(numberOfLines) {
    for (let i = 1; i <= numberOfLines; i++) {
        let line = ``;
        
        for (let j = 1; j <= i; j++) {
            line += `${i} `;
            
        }
        line.Trim;
        console.log(line);
        
    }
}

printTriangle(3);
printTriangle(5);
printTriangle(6);