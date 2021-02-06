function solve(array) {
    let arr = [];
    for (let i = 1; i < array.length; i++) {
        let tokens = array[i].split(' | ');
        let Town = tokens[0].substring(2);
        let Latitude = Number(`${Number(tokens[1]).toFixed(2)}`);
        let Longitude = Number(`${Number(tokens[2].substring(0, tokens[2].length - 2)).toFixed(2)}`);
        
        arr.push({Town, Latitude, Longitude});
    }

    let output = `[`;
    arr.forEach(town => {
        output += `${JSON.stringify(town)},`
    });

    output = output.substring(0, output.length - 1) + `]`;
    console.log(output);
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);

console.log("---------");

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);