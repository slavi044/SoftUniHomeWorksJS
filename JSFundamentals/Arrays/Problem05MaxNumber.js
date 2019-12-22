function topIntegers(array) {
    let outputArray = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isBigger = false;
               
            }
            
        }

        if (isBigger) {
            outputArray.push(array[i]);
        }
        
    }

    console.log(outputArray.join(' '));
    
}

topIntegers(['1', '4', '3', '2']);