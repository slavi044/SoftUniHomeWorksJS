function partyList(commands) {
    let vipList = [];
    let regularList = [];

    while (true) {
        let command = commands.shift();

        if (command === 'PARTY') {
            break;
        }

        let ch = command[0];

        if (ch >= '0' && ch <= '9') {
            vipList.push(command);

        } else {
            regularList.push(command);
        }
    }

    while (commands.length > 0) {
        let command = commands.shift();

        let ch = command[0];

        if (ch >= '0' && ch <= '9') {
            let index = vipList.indexOf(command);
            vipList.splice(index, 1);

        } else {
            let index = regularList.indexOf(command);
            regularList.splice(index, 1);
        }
    }

    console.log(regularList.length + vipList.length);
    

    for (const vip of vipList) {
        console.log(vip);
        
    }

    for (const regular of regularList) {
        console.log(regular);
        
    }
}

partyList([
    '7IK9Yo0h', '9NoBUajQ',
    'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc'
]);