function orderSystemComponents(components) {
    let systems = new Map();

    for (const row of components) {
        let tokens = row.split(' | ');
        let system = tokens[0];
        let component = tokens[1];
        let subComponent = tokens[2];
        
        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        } 
        
        if (!systems[system].hasOwnProperty(component)) {
            systems[system][component] = [];
        }

        if (!systems[system][component].hasOwnProperty(subComponent)) {
            systems[system][component].push(subComponent);
        }
    }

    let sortedKeys = Object.keys(systems).sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length || a.localeCompare(b));
    
    for (const system of sortedKeys) {
        console.log(system);

        let sortedSubKeys = Object.keys(systems[system]).sort((a, b) => Object.keys(systems[system][b]).length - Object.keys(systems[system][a]).length);
        
        for (const component of sortedSubKeys) {
            console.log(`|||${component}`);
            
            for (const subComponent of systems[system][component]) {
                console.log(`||||||${subComponent}`);
                
            }
        }
    }
    
};

orderSystemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);