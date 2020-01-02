function battle(commands) {
    let pirateShip = commands.shift().split('>').map(n => Number(n));
    let warShip = commands.shift().split('>').map(n => Number(n));
    let maximumHealthCapacity = Number(commands.shift());

    for (const command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'Fire') {
            let index = tokens.shift();
            let damage = tokens.shift();

            if (warShip.length > index) {
                if (warShip[index] - damage <= 0) {
                    warShip[index] = 0;
                    return "You won! The enemy ship has sunken.";

                } else {
                    warShip[index] -= damage;
                }
            }

        } else if (action === 'Defend') {
            let startIndex = tokens.shift();
            let endIndex = tokens.shift();
            let damage = tokens.shift();

            if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= 0 && endIndex < pirateShip.length)) {// startIndex > endIndex ???
                for (let i = startIndex; i <= endIndex; i++) {
                    if (pirateShip[i] - damage <= 0) {
                        pirateShip[i] = 0;
                        return "You lost! The pirate ship has sunken.";

                    } else {
                        pirateShip[i] -= damage;
                    }
                }
            }
        } else if (action === 'Repair') {
            let index = tokens.shift();
            let health = tokens.shift();

            if (index < pirateShip.length) {
                if (pirateShip[index] + health > maximumHealthCapacity) {
                    pirateShip[index] = maximumHealthCapacity;
                } else {
                    pirateShip[index] += maximumHealthCapacity;
                }
            }

        } else if (action === 'Status') {
            let count = 0;

            for (const number of pirateShip) {
                if (number < maximumHealthCapacity / 5) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);

        }
    }

   return `Pirate ship status: ${pirateShip.reduce((a, b)=> a + b, 0)}\nWarship status: ${warShip.reduce((a, b)=> a + b, 0)}`;





}

console.log(battle([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]));