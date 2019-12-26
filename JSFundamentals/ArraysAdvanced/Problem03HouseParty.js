function printListOfGuests(array) {
    let guests = [];

    for (let command of array) {
        let tokens = command.split(" ");
        let name = tokens[0];
        let goOrNot = tokens[2];
        
        if (goOrNot === "going!") {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }

        } else if(goOrNot === "not") {
            if (guests.includes(name)) {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }

        }
    }
    console.log(guests.join('\n'));
    
}

printListOfGuests(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);