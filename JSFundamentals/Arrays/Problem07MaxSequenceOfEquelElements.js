function getMaxSequence(arr) {
    let counter = 0;
    let scoundCounter = 0;
    let numToPrint = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1]) {
            counter++;
            
            if (counter > scoundCounter) {
                numToPrint = arr[i];
                scoundCounter = counter;
            }
        } else {
            counter = 0;
        }

    }

    let strToPrint = `${numToPrint}`;

    for (let i = 0; i < scoundCounter; i++) {
        strToPrint += ` ${numToPrint}`;

    }
    
    console.log(strToPrint);
    

}

getMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
getMaxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
getMaxSequence([4, 4, 4, 4]);