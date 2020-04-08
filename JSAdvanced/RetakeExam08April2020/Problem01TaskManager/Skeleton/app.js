function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');

    let sectionOpen = document.getElementsByTagName('section')[1].children[1];
    let sectionInProgres = document.getElementsByTagName('section')[2].children[1];
    let sectionComplete = document.getElementsByTagName('section')[3].children[1];

    let btnAdd = document.getElementById('add');

    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();

        if (task.value !== '' && description.value !== '' && date.value !== '') {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let pDes = document.createElement('p');
            let pData = document.createElement('p');
            let div = document.createElement('div');
            let btnStart = document.createElement('button');
            let btnDelete = document.createElement('button');

            h3.textContent = `${task.value}`;
            pDes.textContent = `Description: ${description.value}`;
            pData.textContent = `Due Date: ${date.value}`;
            div.classList.add('flex')
            btnStart.textContent = 'Start';
            btnStart.classList.add('green');
            btnDelete.textContent = 'Delete';
            btnDelete.classList.add('red');

            article.appendChild(h3);
            article.appendChild(pDes);
            article.appendChild(pData);
            div.appendChild(btnStart);
            div.appendChild(btnDelete);
            article.appendChild(div);

            sectionOpen.appendChild(article);

            btnStart.addEventListener('click', (element) => {
                let article = element.target.parentElement.parentElement
                article.remove();
                
                btnStart.remove();
                
                let btnFinish = document.createElement('button');
                btnFinish.textContent = 'Finish';
                btnFinish.classList.add('orange');
                div.appendChild(btnFinish);
                sectionInProgres.appendChild(article);

                btnFinish.addEventListener('click', () => {
                    article.remove();
                    div.remove();
                    sectionComplete.appendChild(article);
                });
            });

            btnDelete.addEventListener('click', (element) => {
                article.remove();
                
            });

            task.value = '';
            description.value = '';
            date.value = '';
        }
        
    });
}