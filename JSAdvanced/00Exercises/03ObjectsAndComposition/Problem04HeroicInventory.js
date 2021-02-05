function sovle(arr) {
    let heroes = [];

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if (tokens.length === 3) {
            items = tokens[2].split(', ');

        }

        heroes.push({
            name,
            level,
            items
        });
    }

    console.log(JSON.stringify(heroes));

};

sovle([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

sovle(['Jake / 1000 / Gauss, HolidayGrenade']);