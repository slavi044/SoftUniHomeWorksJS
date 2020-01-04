function solve(array) {
    let power = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7,
        "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14
    };

    let cards = {
        "S": 4, "H": 3, "D": 2, "C": 1
    };

    function getCardValue(card) {
        let p = card.slice(0, card.length - 1);
        let m = card[card.length - 1];
        return power[p] * cards[m];
    };

    let persons = {};

    for (const command of array) {
        let tokens = command.split(': ');
        let name = tokens[0];
        let deck = tokens[1].split(', ');

        if (!persons.hasOwnProperty(name)) {
            persons[name] = deck.filter((value, index, self) => self.indexOf(value) === index);
        } else {
            persons[name] = persons[name]
                .concat(deck)
                .filter((value, index, self) => self.indexOf(value) === index);
        }


    }

    for (const arr of Object.entries(persons)) {
        let name = arr[0];
        let deckSum = arr[1].map(c => getCardValue(c)).reduce((a, b) => a + b, 0);

        console.log(`${name}: ${deckSum}`);
    }


}

solve([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
]);