function priceOfVacation(countOfPeople, typoOfGroup, dayOfWeek) {
    
    let priceForPerson = 0.0;

    if (typoOfGroup === 'Students') {
        
        if (dayOfWeek === 'Friday') {
            priceForPerson = 8.45;

        } else if (dayOfWeek === 'Saturday') {
            priceForPerson = 9.80;
            
        } else if (dayOfWeek === 'Sunday') {
            priceForPerson = 10.46;
            
        }
    } else if (typoOfGroup === 'Business') {
        
        if (dayOfWeek === 'Friday') {
            priceForPerson = 10.90;

        } else if (dayOfWeek === 'Saturday') {
            priceForPerson = 15.60;
            
        } else if (dayOfWeek === 'Sunday') {
            priceForPerson = 16.00;
            
        }
    } else if (typoOfGroup === 'Regular') {
        
        if (dayOfWeek === 'Friday') {
            priceForPerson = 15.00;

        } else if (dayOfWeek === 'Saturday') {
            priceForPerson = 20.00;
            
        } else if (dayOfWeek === 'Sunday') {
            priceForPerson = 22.50;
            
        }
    }

    let totalPrice = countOfPeople * priceForPerson;

    if (typoOfGroup === 'Students' && countOfPeople >= 30) {
        totalPrice -= totalPrice * 0.15;

    }else if (typoOfGroup === 'Business' && countOfPeople >= 100) {
        totalPrice -= priceForPerson * 10;

    }else if (typoOfGroup === 'Regular' && (countOfPeople >= 10 && countOfPeople <= 20)) {
        totalPrice *= 0.95; 

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}

priceOfVacation(30, "Students", "Sunday");
priceOfVacation(40, "Regular", "Saturday");
priceOfVacation(50, "Business", "Friday");