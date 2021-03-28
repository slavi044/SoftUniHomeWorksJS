function attachEvents() {
    let personField = document.getElementById('person');
    let phoneField = document.getElementById('phone');
    let createBtn = document.getElementById('btnCreate');
    let loadBtn = document.getElementById('btnLoad');
    let phoneBook = document.getElementById('phonebook');

    const url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

    loadBtn.addEventListener('click', loadPersons);
    createBtn.addEventListener('click', createPerson);

    function loadPersons() {
        phoneBook.innerHTML = '';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(([id, person]) => {
                    let li = document.createElement('li');
                    li.textContent = `${person.person}: ${person.phone}`;

                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', deletePerson);
                    deleteBtn.value = id;

                    li.appendChild(deleteBtn);
                    phoneBook.appendChild(li);
                });
            });

    }

    function deletePerson(event) {
        const headers = { method: 'DELETE' };

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${this.value}.json`, headers)
            .then(loadPersons);
    }

    function createPerson() {
        let headers = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                person: personField.value,
                phone: phoneField.value
            })
        }

        fetch(url, headers)
            .then(() => {
                personField.value = '';
                phoneField.value = '';
                loadPersons();
            });
    }
}

attachEvents();