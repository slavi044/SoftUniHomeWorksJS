function solve(name, age, weight, height) {
    let BMI = Math.round((weight / height / height) * 10000);

    let status = '';
    if (BMI < 18.5) {
        status = 'underweight';
    } else if (BMI < 25) {
        status = 'normal';
    } else if (BMI < 30) {
        status = 'overweight';
    } else if (BMI >= 30) {
        status = 'obese';
    }

    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        "BMI": BMI,
        status: status
    };

    if (BMI >= 30) {
        patient.recommendation = 'admission required';
    }       

    return patient;
};

console.log(solve("Peter", 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));