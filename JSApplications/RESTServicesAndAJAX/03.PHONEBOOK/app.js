function attachEvents() {
    let loadBtn = document.getElementById('btnLoad');
    let btnCreate = document.getElementById('btnCreate');
    let personField = document.getElementById('person');
    let phoneField = document.getElementById('phone');
    let phonebook = document.getElementById('phonebook');

    let numberOfElement;

    function checkForErrors(res) {
        if (res === null || res === undefined) {
            console.log('Invalid data!');
        }

        return res;
    }

    function getPhones(res) {
        return fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
            .then(checkForErrors)
            .then(x => x.json())
    }

    function deleteNumber(e) {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${e.target.value}.json`, {
            method: "DELETE"
        })
    }

    function appendPhones(res) {
        phonebook.innerHTML = '';

        Object.entries(res).forEach(([id, info]) => {
            let li = document.createElement('li');
            li.innerHTML = `${info.person} : ${info.phone}`;

            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.value = id;
            button.addEventListener('click', (e) => {
                console.log('click ' + e.target.value);

                deleteNumber(e);
            })

            li.appendChild(button);
            phonebook.appendChild(li);

            loadBtn.click;
            personField.value = '';
            phoneField.value = '';
        });
    };

    loadBtn.addEventListener('click', () => {
        getPhones()
            .then(checkForErrors)
            .then(res => {
                console.log(res);

                appendPhones(res);
            });

    });

    btnCreate.addEventListener('click', () => {
        let personToAdd = {
            person: personField.value,
            phone: phoneField.value
        };

        getPhones()
            .then(checkForErrors)
            .then(res => {
                fetch('https://phonebook-nakov.firebaseio.com/phonebook.json', {
                    method: "POST",
                    body: JSON.stringify(personToAdd)
                });
                return res
            })
            .then(res => {
                appendPhones(res);
            })
    })
}

attachEvents();