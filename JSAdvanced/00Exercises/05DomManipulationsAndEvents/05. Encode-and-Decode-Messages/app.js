function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];
    let encodeTextArea = document.getElementsByTagName('textarea')[0];
    let decodeTextArea = document.getElementsByTagName('textarea')[1];
    let message = '';

    encodeButton.addEventListener('click', () => {
        let arr = [];
        for (let i = 0; i < encodeTextArea.value.length; i++) {
            arr.push(String.fromCharCode(encodeTextArea.value.charCodeAt(i) + 1));
            console.log(String.fromCharCode(encodeTextArea.value.charCodeAt(i) + 1));
        }
        
        encodeTextArea.value = '';
        message = arr.join('');
        decodeTextArea.value = message;
    });
    
    
    decodeButton.addEventListener('click', () => {
        console.log(message);
        let arr = [];
        for (let i = 0; i < message.length; i++) {
            arr.push(String.fromCharCode(message.charCodeAt(i) - 1));
            console.log(String.fromCharCode(encodeTextArea.value.charCodeAt(i) + 1));
        }

        decodeTextArea.value = arr.join('');
        message = '';
    });
}