import { get, createBook, updateBook, deleteBook } from './firebase-requests.js';

let btnLoadBooks = document.getElementById('loadBooks');
let btnSubmit = document.getElementById('Submit');

let titelField = document.getElementById('title');
let authorField = document.getElementById('author');
let ISBNField = document.getElementById('isbn');

let booksTable = document.getElementById('booksTable');

function engine() {
    btnLoadBooks.addEventListener('click', (event) => {
        event.preventDefault();
        booksTable.innerHTML = '';
        
        get()
            .then(res => {
                Object.entries(res).forEach(e => {
                    console.log(e);                  

                    let tr = createHTMLElement('tr');

                    let title = createHTMLElement('td', e[1].title);
                    let author = createHTMLElement('td', e[1].author);
                    let ISBN = createHTMLElement('td', e[1].ISBN);

                    let buttonsHolder = createHTMLElement('td');
                    let btnEdit = createHTMLElement('button', 'Edit', e[0]);
                    let btnDelete = createHTMLElement('button', 'Delete', e[0]);

                    btnEdit.addEventListener('click', (event) => {
                        let bookToEdit = event.target.parentElement.parentElement;
                        console.log(bookToEdit);

                        console.log(event.target.parentElement.parentElement.children);

                        let title = event.target.parentElement.parentElement.children[0];
                        let author = event.target.parentElement.parentElement.children[1];
                        let isbn = event.target.parentElement.parentElement.children[2];
                        let btnSave = event.target.parentElement.parentElement.children[3].children[0];
                        let btnCancel = event.target.parentElement.parentElement.children[3].children[1];

                        title.outerHTML = `<input placeholder='${event.target.parentElement.parentElement.children[0].textContent}'></input>`;
                        author.outerHTML = `<input placeholder='${event.target.parentElement.parentElement.children[1].textContent}'></input>`;
                        isbn.outerHTML = `<input placeholder='${event.target.parentElement.parentElement.children[2].textContent}'></input>`;
                        btnSave.outerHTML = '<button>Save</button>';
                        btnCancel.outerHTML = '<button>Cancel</button>';

                        //TODO: set buttons save and change operations and To arrange input fields.
                    });
                    
                    btnDelete.addEventListener('click', (event) => {
                        let bookToRemove = event.target.value;
                        console.log(bookToRemove);
                        deleteBook(bookToRemove);
                    });

                    buttonsHolder.appendChild(btnEdit);
                    buttonsHolder.appendChild(btnDelete);

                    tr.appendChild(title);
                    tr.appendChild(author);
                    tr.appendChild(ISBN);
                    tr.appendChild(buttonsHolder);

                    booksTable.appendChild(tr);
                }); 
            })
            .catch(err => {
                console.log('Invalid operation!');                
            })
    });

    btnSubmit.addEventListener('click', (event) => {
        event.preventDefault();

        let bookBody = {
            title: titelField.value,
            author: authorField.value,
            ISBN: ISBNField.value
        };

        createBook(bookBody);
        console.log(bookBody);
    });
}

function createHTMLElement(type, content, value) {
    let element = document.createElement(type);
    
    if (content) {
        element.textContent = content;
    }

    if (value) {
        element.value = value;
    }

    return element;
}

engine();