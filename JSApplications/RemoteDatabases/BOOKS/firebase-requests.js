const fireBaseUrl = 'https://remotedb-exercisebooks.firebaseio.com'; // <-- Here paste URL from your database! :) 

function get() {
    return fetch(fireBaseUrl + '/books.json')
        .then(res => res.json());
}

function createBook(body) {
    fetch(fireBaseUrl + '/books.json', {
        method: 'POST',
        body: JSON.stringify(body)
    })
}

function updateBook(id, body) {
    fetch(fireBaseUrl + `/books/${id}.json`, {
        method: 'PUT',
        body: body
    })
}

function deleteBook(id) {
    fetch(fireBaseUrl + `/books/${id}.json`, {
        method: 'DELETE'
    })
}

export { get, createBook, updateBook, deleteBook }