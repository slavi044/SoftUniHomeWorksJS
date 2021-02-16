function addItem() {
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    console.log(itemValue.value);
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = itemText.value;
    option.value = itemValue.value;

    itemText.value = '';
    itemValue.value = '';

    menu.appendChild(option);
}