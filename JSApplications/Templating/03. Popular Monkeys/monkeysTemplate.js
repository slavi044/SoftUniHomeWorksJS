import { monkeys } from './monkeys.js'

let div = document.getElementById('table');

async function engine() {
    let temp = await fetch('./monkeyTemplate.hbs').then((r) => r.text());
    let template = Handlebars.compile(temp);
    let result = template(  { monkeys } );
    
    div.innerHTML = result;

    let buttons = document.getElementsByClassName('btnInfo');

    for (const btn of buttons) {
        btn.addEventListener('click', (e) => {
            if (e.target.parentElement.children[3].style.display === 'none') {
                e.target.parentElement.children[3].style.display = 'block'
            } else {
                e.target.parentElement.children[3].style.display = 'none'
            }
        });
    }
}

engine();