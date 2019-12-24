function loadingBar(number) {
    let loadingBarArray = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    number /= 10;
    let decimalDigit = 0;

    for (let i = 0; i < number; i++) {
        decimalDigit++;

        loadingBarArray[i] = '%';
    }

    if (decimalDigit === 10) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${decimalDigit * 10}% [${loadingBarArray.join('')}]`);
        console.log('Still loading...');
        
    }
}

loadingBar(20);
console.log('--------------------------------');
loadingBar(30);
console.log('--------------------------------');
loadingBar(90);
console.log('--------------------------------');
loadingBar(100);