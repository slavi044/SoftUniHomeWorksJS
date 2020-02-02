function subtract() {
    const $firstInputElement = document.getElementById('firstNumber'); 
    const $secoundInputElement = document.getElementById('secondNumber'); 
    const $divElement = document.getElementById('result');

    const result = +$firstInputElement.value - +$secoundInputElement.value;

    $divElement.textContent = result;
    
};