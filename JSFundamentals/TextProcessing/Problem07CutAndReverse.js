function cutAndReverse(text) {
    let textAsArray = text.split('').reverse();
    let firstPart = textAsArray.splice(text.length / 2);
    
    
    console.log(firstPart.join(''));
    console.log(textAsArray.join(''));   
};

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');