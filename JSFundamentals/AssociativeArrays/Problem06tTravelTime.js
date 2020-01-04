function solve(arr) {
    let travels = {};

    for (const travel of arr) {
        let tokens = travel.split(" > ");
        let country = tokens[0];
        let town = tokens[1];
        let price = Number(tokens[2]);

        if (!travels.hasOwnProperty(country)) {
            travels[country] = {};
        }

        if (!travels[country].hasOwnProperty(town)) {
            travels[country][town] = price;
        }

        if (travels[country][town] > price) {
            travels[country][town] = price;
        }

    }

    let sordetDestinations = Object
        .entries(travels)
        .sort(function (a, b) {
            return a[0][0].localeCompare(b[0][0])
        });

        for (let [country, town] of sordetDestinations) {
            let sortedTowns = Object.entries(town)
                .sort((a, b) => (a[1] - b[1]))
                .map(t => t.join(" -> "))
            console.log(`${country} -> ${sortedTowns.join(" ").trim()}`);
        }
}

solve([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
]);