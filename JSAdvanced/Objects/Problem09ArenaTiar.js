function sovle(commands) {
    let fighters = [];

    for (const command of commands) {
        if (command === 'Ave Cesar') {
            break;
        } 
        
        let c = command.split(' ');

        if (c.length === 3) {
            let firstG = c[0];
            let secoundG = c[2];
            if (fighters.hasOwnProperty(firstG) && fighters.hasOwnProperty(secoundG)) {
                for (const [key1, value] of Object.entries(fighters[firstG])) {
                    for (const [key2, value] of Object.entries(fighters[secoundG])) {
                        if (key1 === key2) {
                            if (Number(fighters[firstG][key1]) > Number(fighters[secoundG][key2])) {
                                delete  fighters[secoundG];  

                            } else if (Number(fighters[firstG][key1]) < Number(fighters[secoundG][key2])){
                                delete  fighters[firstG];                                  
                            }
                            
                        }
                    }
                }
            }
            
        } else {
            let tokens = command.split(' -> ');
        let fighter = tokens[0];
        let form = tokens[1];
        let points = Number(tokens[2]);

        if (!fighters.hasOwnProperty(fighter)) {
            fighters[fighter] = {};
        }

        if (!fighters[fighter].hasOwnProperty(form)) {
            fighters[fighter][form] = 0;
        }

        fighters[fighter][form] += points;
        }

        
    }

    let fightersOutput = Object.entries(fighters).sort((a, b) => b[2] - a[2] || b[0].localeCompare(a[0]));

    for (const [key, value] of fightersOutput) {
        let forms = Object.entries(value);        
        
        let sumOfPoints = 0;

        for (const form of forms) {
            sumOfPoints += form[1];
        }

        console.log(`${key}: ${sumOfPoints} skill`);

        for (const form of forms.sort((a, b) => b[1] - a[1])) {
            console.log(`- ${form[0]} <!> ${form[1]}`);            
        }
        
    }
};

sovle([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);

console.log('------------------------');


sovle([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);