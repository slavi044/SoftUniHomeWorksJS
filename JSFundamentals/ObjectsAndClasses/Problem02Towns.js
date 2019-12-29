function printTowns(array) {
    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' | ');

        let town = tokens[0];
        let latitude = Number(tokens[1]);
        let longitude = Number(tokens[2]);

        let townAsObj = { name: town, latitude: latitude, longitude: longitude };

        console.log(
            `{ town: '${townAsObj.name}', latitude: '${townAsObj.latitude.toFixed(2)}', longitude: '${townAsObj.longitude.toFixed(2)}' }`);

    }
}

printTowns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);