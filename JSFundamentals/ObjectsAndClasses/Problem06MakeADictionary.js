function makeADictionary(params) {
    let arrayOfTerms = [];

    for (const word of params) {
        let obj = JSON.parse(word);
        let term =Object.keys(obj);
        term = term[0];
        
        let definition = Object.values(obj);
        definition = definition[0];
        
        arrayOfTerms.push({term, definition});
    }

    for (let i = 0; i < arrayOfTerms.length - 1; i++) {
        for (let j = i + 1; j < arrayOfTerms.length; j++) {
            if (arrayOfTerms[i].term === arrayOfTerms[j].term) {
                arrayOfTerms.splice(i, 1);
                i = 0;
                j = i + 1;
            }      
        }
    }

    arrayOfTerms.sort((a, b) => a.term.localeCompare(b.term));

    for (let obj of arrayOfTerms) {
        console.log(`Term: ${obj.term} => Definition: ${obj.definition}`);
                
   }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffeebeans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);