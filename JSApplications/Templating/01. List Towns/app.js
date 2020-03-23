let btnLoad = document.getElementById('btnLoadTowns');
let div = document.getElementById('root');
let inputField = document.getElementById('towns');

btnLoad.addEventListener('click', () => {
    let towns = inputField.value.split(', ');

    fetch('./template.hbs')
        .then((r) => r.text())
        .then((r) => {
            let template = Handlebars.compile(r);
            let resultHTML = template({ towns });

            div.innerHTML = resultHTML;
        });
});