function collectResources(resources) {
    let repository = {};

    while (resources.length > 0) {
        let resource = resources.shift();
        let quantity = Number(resources.shift());

        if (!repository.hasOwnProperty(resource)) {
            repository[resource] = quantity;
        } else {
            repository[resource] += quantity;
        }
    }
    
    for (const resource of Object.entries(repository)) {
        console.log(`${resource[0]} -> ${resource[1]}`);
        
    }
}

collectResources([
    'gold', '155',
    'silver', '10',
    'copper', '17'
]);

console.log('--------------------------------------');

collectResources([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15'
]);