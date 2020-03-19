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
                    let tr = createHTMLElement('tr');

                    let title = createHTMLElement('td', e[1].title);
                    let author = createHTMLElement('td', e[1].author);
                    let ISBN = createHTMLElement('td', e[1].ISBN);

                    let buttonsHolder = createHTMLElement('td');
                    let btnEdit = createHTMLElement('button', 'Edit', e[0]);
                    let btnDelete = createHTMLElement('button', 'Delete', e[0]);

                    btnEdit.addEventListener('click', (event) => {
                        event.preventDefault();                        
                        
                        let bookToEdit = event.target.parentElement.parentElement;
                        let id = event.target.value;

                        let infoForBook = event.target.parentElement.parentElement.children;

                        let title = createHTMLElement('input', null, null, infoForBook[0].textContent);
                        let author = createHTMLElement('input', null, null, infoForBook[1].textContent);
                        let isbn = createHTMLElement('input', null, null, infoForBook[2].textContent);

                        let btnSave = createHTMLElement('button', 'Save');
                        let btnCancel = createHTMLElement('button', 'Cancel');

                        bookToEdit.innerHTML = '';
                        bookToEdit.appendChild(title);
                        bookToEdit.appendChild(author);
                        bookToEdit.appendChild(isbn);
                        bookToEdit.appendChild(btnSave);
                        bookToEdit.appendChild(btnCancel);

                        btnSave.addEventListener('click', () => {                            
                            let newTitle = '';
                            let newAuthor = '';
                            let newISBN = '';

                            if (title.value === '') {
                                newTitle = title.placeholder;
                            } else {
                                newTitle = title.value;
                            }

                            if (author.value === '') {
                                newAuthor = author.placeholder;
                            } else {
                                newAuthor = author.value;
                            }

                            if (isbn.value === '') {
                                newISBN = isbn.placeholder;
                            } else {
                                newISBN = isbn.value;
                            }

                            let bookBody = {
                                title: newTitle,
                                author: newAuthor,
                                ISBN: newISBN
                            };

                            updateBook(id, bookBody);
                            btnLoadBooks.click();
                        });


                        btnCancel.addEventListener('click', () => {
                            btnLoadBooks.click();
                        });
                    });

                    btnDelete.addEventListener('click', (event) => {
                        let bookToRemove = event.target.value;
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
    });
}

function createHTMLElement(type, content, value, placeholder) {
    let element = document.createElement(type);

    if (content) {
        element.textContent = content;
    }

    if (value) {
        element.value = value;
    }

    if (placeholder) {
        element.placeholder = placeholder;
    }

    return element;
}

engine();