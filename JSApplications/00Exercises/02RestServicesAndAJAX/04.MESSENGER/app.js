function attachEvents() {
    let nameField = document.getElementById('author');
    let messageField = document.getElementById('content');
    let textarea = document.getElementById('messages');
    let btnSend = document.getElementById('submit');
    let btnRefresh = document.getElementById('refresh');

    const url = 'https://rest-messanger.firebaseio.com/messanger.json';

    btnRefresh.addEventListener('click', refresh);
    btnSend.addEventListener('click', sendMsg);

    function refresh() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.values(data)
                    .forEach(({ author, content }) => {
                        textarea.value += `${author}: ${content}\n`;
                    });
            });
    }

    function sendMsg() {
        let headers = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                author: nameField.value,
                content: messageField.value
            })
        }

        fetch(url, headers)
            .then(() => {
                refresh();
                nameField.value = '';
                messageField.value = '';
            });
    }
}

attachEvents();