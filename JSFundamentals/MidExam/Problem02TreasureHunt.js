function manageTreasureChest(commands) {
    let treasure = commands.shift().split('|');

    for (const command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'Yohoho!') {
            break;

        } else if (action === 'Loot') {
            for (const element of tokens) {
                if (!treasure.includes(element)) {
                    treasure.unshift(element);
                }
            }
        } else if (action === 'Drop') {
            let index = tokens.shift();
            if (index >= 0 && index < treasure.length) {
                let element = treasure.splice(index, 1);
                treasure.push(element);
            }
        } else if (action === 'Steal') {
            let index = tokens.shift();
            if (index >= treasure.length) {
                index = treasure.length;
            }

            let stealElements = treasure.splice(treasure.length - index);
            console.log(stealElements.join(', '));
        }
    }

    let itemsLength = 0;
    for (const item of treasure) {
        itemsLength += Number(item.length);
    }
    
    if (treasure.length === 0) {
        console.log('Failed treasure hunt.');

    } else {
        console.log(`Average treasure gain: ${(itemsLength / (treasure.length)).toFixed(2)} pirate credits.`);
    }

}

manageTreasureChest([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]);

console.log('----------------------------------------');

manageTreasureChest([
        'Diamonds|Silver|Shotgun|Gold',
        'Loot Silver Medals Coal',
        'Drop -1',
        'Drop 1',
        'Steal 6',
        'Yohoho!'
]);
