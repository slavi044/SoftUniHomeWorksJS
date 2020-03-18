import { get, createBook, updateBook, deleteBook } from './firebase-requests.js';

let btnLoadBooks = document.getElementById('loadBooks');
let btnSubmit = document.getElementById('Submit');
let titelField = document.getElementById('title');
let authorField = document.getElementById('author');
let ISBNField = document.getElementById('isbn');

function engine() {
    btnLoadBooks.addEventListener('click', (event) => {
        event.preventDefault();
        get().then(console.log);               
    });

    btnSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('asdasd')
        //TODO: Create book as obj with id, create book... 
    });
}

engine();