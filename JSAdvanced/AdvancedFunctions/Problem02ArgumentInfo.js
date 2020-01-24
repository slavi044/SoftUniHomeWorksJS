function ArgumentInfo() {
    let types = {};

    for (const arg of arguments) {
        let type = typeof(arg);
        console.log(`${type}: ${arg}`);

        if (!types.hasOwnProperty(type)) {
            types[type] = 0;
        }
        
        types[type]++;
    }

    let keys = Object.entries(types);
    let typesAsArr = Object.keys(types).sort((a, b) => types[b] - types[a]);

    for (const type of typesAsArr) {
        console.log(`${type} = ${types[type]}`);     
    }   
};

ArgumentInfo(
    'cat',
    42,
    function () { console.log('Hello world!'); },
    false,
    false
);