function encodeAndDecodeMessages() {
    const $divs = document.querySelectorAll('div#container main#main div');

    const $textAreas = document.querySelectorAll('textarea');

    $textAreas[0].nextElementSibling.addEventListener('click', encode);
    $textAreas[1].nextElementSibling.addEventListener('click', decode);

    function encode(params) {
        const text = $textAreas[0]
        .value
        .split('')
        .map((char) => {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        })
        .join(''); 
        
        $textAreas[0].value = '';
        $textAreas[1].value = text;
    };

    function decode(params) {  
        const text = $textAreas[1]
        .value
        .split('')
        .map((char) => {
            return String.fromCharCode(char.charCodeAt(0) - 1);
        })
        .join('');
        
        $textAreas[1].value = text;
    }

};