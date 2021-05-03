let inputField = document.getElementById('towns');
let loadBtn = document.getElementById('btnLoadTowns');
let table = document.getElementById('root');

loadBtn.addEventListener('click', () => {
    let towns = inputField.value.split(', ');
    inputField.value = '';
    table.textContent = '';

    fetch('./template.hbs')
        .then((r) => r.text())
        .then((r) => {
            let template = Handlebars.compile(r);
            let resultHTML = template({ towns });

            table.innerHTML = resultHTML;
        });
});
