function attachEvents() {
    let name = document.getElementById('author');
    let content = document.getElementById('content');
    let messageField = document.getElementById('messages');
    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    let url = `https://rest-messanger.firebaseio.com/messanger.json`;

    function getMessages() {
        return fetch(url)
            .then(res => res.json())
    }

    function appendMessages(res) {
        messageField.textContent = ''

        Object.entries(res).forEach(e => {
            console.log(e)

            let strToAppend = `${e[1].author}: ${e[1].content}\n`

            messageField.textContent += strToAppend
        });
    }

    function sendMessage(author, text) {
        let obj = {
            author: author,
            content: text
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj)
        })

        name.value = ''
        content.value = ''
    }

    refreshBtn.addEventListener('click', () => [
        getMessages(url)
            .then(appendMessages)
    ]);

    sendBtn.addEventListener('click', () => {
        sendMessage(name.value, content.value)
    });
}

attachEvents();