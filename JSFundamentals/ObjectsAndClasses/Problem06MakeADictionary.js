function makeADictionary(params) {
    for (const word of params) {
        let json = JSON.parse(word);
        console.log(json);
        
    }// da gledam reshenieto ot lekciqta <3 :D 

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffeebeans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);