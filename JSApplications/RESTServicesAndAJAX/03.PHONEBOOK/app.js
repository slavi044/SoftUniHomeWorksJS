function attachEvents() {
    let loadBtn = document.getElementById('btnLoad');

    loadBtn.addEventListener('click', () => {
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
        .then(x => x.json())
        .then(res => {
            console.log(res)
        })
    })
}

attachEvents();