function calculatePludner(array) {
    let days = Number(array[0]);
    let plunderPerDay = Number(array[1]);
    let expectedPlunder = Number(array[2]);

    let plunder = 0;

    for (let i = 1; i <= days; i++) {
        plunder += plunderPerDay;

        if (i % 3 === 0) {
            plunder += plunderPerDay * 0.5;
        }
        if (i % 5 === 0) {
            plunder -= plunder * 0.3;
        }
    }

    if (plunder >= expectedPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);

    } else {
        console.log(`Collected only ${((plunder * 100) / expectedPlunder).toFixed(2)}% of the plunder.`);

    }
}

calculatePludner(['5', '40', '100']);
calculatePludner(['10', '20', '380']);