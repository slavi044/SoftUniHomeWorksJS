function registerForHeroes(heroInfo) {
    let heroRegister = [];

    for (let i = 0; i < heroInfo.length; i++) {
        let tokens = heroInfo[i].split(' / ');
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let heroItems = tokens[2].split(', ');
        
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroRegister.push(hero);
        heroRegister.sort((a, b) => a.level - b.level);
    }

    for (const hero of heroRegister) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
        
    }

}

registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);