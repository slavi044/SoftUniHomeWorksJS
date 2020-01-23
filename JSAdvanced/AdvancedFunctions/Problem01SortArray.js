function solve(array, order) {
    let ascOrder = (a, b) => a - b;
    let descOrder = (a, b) => b - a;

    let sorting = {
        asc: ascOrder,
        desc: descOrder
    };

    return array.sort(sorting[order]);
};

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));