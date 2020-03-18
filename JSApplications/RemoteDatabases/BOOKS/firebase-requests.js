const fireBaseUrl = 'https://remotedb-exercisebooks.firebaseio.com/remotedb-exercisebooks.json'; // <-- Here paste URL from your database! :) 

function get() {
    return fetch(fireBaseUrl)
        .then(res => res.json());
}

function createBook(body) {
    fetch(fireBaseUrl, {
        method: 'POST',
        body: body
    })
}

function updateBook(id, body) {
    
}

function deleteBook(id) {
    fetch(fireBaseUrl, {
        method: 'DELETE'
    })
}

export { get, createBook, updateBook, deleteBook}