function rounding(number, precision) {
    if (precision > 15) {
        precision = 15
    }

    let output = parseFloat(number.toFixed(precision));

    console.log(output);
    
}

rounding(3.1415926535897932384626433832795, 2);
rounding(3.1400, 4);