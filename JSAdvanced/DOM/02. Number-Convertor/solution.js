function solve() {
    let optionList = document.querySelectorAll("#selectMenuTo")[0];
    let button = document.querySelector("button");
    let input = document.querySelector('#input');
    

    optionList.innerHTML = `
    <option select value=""></option>
    <option value="hexadecimal">Hexadecimal</option>
    <option value="binary">Binary</option>
    `;

    button.addEventListener('click', () => {
        let result;
        if (optionList.value === "binary") {
            result = (Number(input.value)).toString(2);
        } else {
            result = Number(input.value).toString(16).toLocaleUpperCase();
        }

        document.getElementById('result').value = result;
        
    });  
}