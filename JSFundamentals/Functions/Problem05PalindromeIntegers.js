function palindromNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        let numToStr = array[i].toString();
        let reverseNumToStr = ``;

        for (let j = numToStr.length - 1; j >= 0 ; j--) {
             reverseNumToStr += numToStr[j];
            
        }

        if (numToStr === reverseNumToStr) {
            console.log(true);
            
        } else {
            console.log(false);
            
        }
    }

}

palindromNumbers([123,323,421,121]);