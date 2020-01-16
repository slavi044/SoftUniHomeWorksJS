function rotateArray(array) {
    let el = Number(array.pop());
    el %= array.length;

    for (let i = 1; i <= el; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '));    

};

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])