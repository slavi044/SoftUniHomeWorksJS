(async() => {
    let div = document.getElementById('allCats');
    let temp = await fetch('./template.hbs')
        .then(res => res.text());
    let template = Handlebars.compile(temp);
    let result = template({ cats })
    
    div.innerHTML = result;

    let buttons = document.getElementsByTagName('button');

    for (const btn of buttons) {
        btn.addEventListener('click', (e)=> {
            if (e.target.parentElement.children[1].style.display === 'none') {
                e.target.parentElement.children[1].style.display = 'block';
                e.target.innerHTML = "Hide status code";
            } else {
                e.target.parentElement.children[1].style.display = 'none';
                e.target.innerHTML = "Show status code";
            }
        })
    }
})()

  
// let div = document.getElementById('allCats');

// (async () => {
//     let temp = await fetch('./catTemplate.hbs').then(r => r.text());
//     let template = Handlebars.compile(temp);
//     let result = template( {cats} );
    
//     div.innerHTML = result;

//     let buttons = document.getElementsByTagName('button');

//     for (const btn of buttons) {
//         btn.addEventListener('click', (e) => {
//             console.log();
            
//             if (e.target.parentElement.children[1].style.display === 'none') {
//                 e.target.parentElement.children[1].style.display = 'block';
//                 e.target.innerHTML = "Hide status code";
//             } else {
//                 e.target.parentElement.children[1].style.display = 'none';
//                 e.target.innerHTML = "Show status code";
//             }
//         });
//     }
// })()