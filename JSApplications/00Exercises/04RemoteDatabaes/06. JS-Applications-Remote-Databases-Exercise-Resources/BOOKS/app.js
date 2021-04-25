let table = document.getElementById('table');
let titleField = document.getElementById('title');
let authorField = document.getElementById('author');
let isbnField = document.getElementById('isbn');
let submitBtn = document.getElementById('submitBtn');
let loadBtn = document.getElementById('loadBooks');
let form = document.getElementById('form');

const url = `https://books-exercise-fd64f-default-rtdb.europe-west1.firebasedatabase.app/Books.json`;


loadBtn.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(res => loadBooks(res))
});

submitBtn.addEventListener('click', createBook);

function createBook() {
    event.preventDefault();

    let book = {
        title: titleField.value,
        author: authorField.value,
        isbn: isbnField.value
    };
    let headers = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(book)
    }

    if (titleField.value !== '' || authorField.value !== '' || isbnField.value !== '') {
        fetch(url, headers)
            .then(() => {
                titleField.value = '';
                authorField.value = '';
                isbnField.value = '';
            });
    }

    console.log(JSON.stringify(book));
}

function loadBooks(res) {
    let result = Object.entries(res);

    table.innerHTML = '';

    for (let i = 0; i < result.length; i++) {
        let title = result[i][1].title;
        let author = result[i][1].author;
        let isbn = result[i][1].isbn;

        let tr = document.createElement('tr');
        let tdTitle = document.createElement('td');
        let tdAuthor = document.createElement('td');
        let tdIsbn = document.createElement('td');
        let tdAction = document.createElement('td');
        let editBtn = document.createElement('button');
        let delBtn = document.createElement('button');

        tr.value = result[i][0];
        tdTitle.textContent = title;
        tdAuthor.textContent = author;
        tdIsbn.textContent = isbn;
        editBtn.addEventListener('click', editFn);
        editBtn.textContent = 'Edit';
        delBtn.addEventListener('click', deleteFn);
        delBtn.textContent = 'Delete';

        tdAction.append(editBtn, delBtn);
        tr.append(tdTitle, tdAuthor, tdIsbn, tdAction);
        table.appendChild(tr)
    }
}

function editFn() {
    
}

function deleteFn() {
    let book = event.target.parentElement.parentElement;

    let url = `https://books-exercise-fd64f-default-rtdb.europe-west1.firebasedatabase.app/Books/${book.value}.json`;
    let headers = {
        method: 'DELETE'
    }
    fetch(url, headers);

}

// <tr>
//     <td>Harry Poter</td>
//     <td>J. K. Rowling</td>
//     <td>0-7475-3269-9</td>
//     <td>
//         <button>Edit</button>
//         <button>Delete</button>
//     </td>
// </tr>