function solve() {
    let form = document.getElementsByTagName('form')[0].children;
    let title = form[1];
    let year = form[3];
    let price = form[5];
    let TotalStoreProfit = document.getElementsByTagName('body')[0].children[2];

    let newBooks = document.getElementById('outputs').children[1].children[1];
    let oldBooks = document.getElementById('outputs').children[0].children[1];

    let btnAddNewBook = document.getElementsByTagName("button")[0];

    btnAddNewBook.addEventListener('click', (e) => {
        e.preventDefault();

        let book = document.createElement('div');
        let p = document.createElement('p');
        let btnBuy = document.createElement('button');
        let btnMove = document.createElement('button');

        book.classList.add('book');
        p.textContent = `${title.value} [${year.value}]`;
        btnMove.textContent = 'Move to old section';

        book.appendChild(p);
        book.appendChild(btnBuy);
        book.appendChild(btnMove);

        if (title.value !== '' && year.value > 0 && price.value > 0) {
            if (year.value >= 2000) {
                newBooks.appendChild(book);
                btnBuy.textContent = `Buy it only for ${Number(price.value).toFixed(2)} BGN`;

            } else {
                oldBooks.appendChild(book);
                btnBuy.textContent = `Buy it only for ${(Number(price.value) * 0.85).toFixed(2)} BGN`;
            }

            title.value = '';
            year.value = '';
            price.value = '';
        }

        btnBuy.addEventListener('click', (event) => {
            let currentStoreProfit = Number(TotalStoreProfit.textContent.split(': ')[1].split(' ')[0]);
            let bookPrice = Number(event.target.textContent.split(' ')[4]);
            currentStoreProfit += bookPrice

            TotalStoreProfit.textContent = `Total Store Profit: ${currentStoreProfit.toFixed(2)} BGN`;

            console.log(TotalStoreProfit);


            event.target.parentElement.remove();
        });

        btnMove.addEventListener('click', (event) => {
            let bookToMove = event.target.parentElement;
            let bookPrice = Number(event.target.parentElement.children[1].textContent.split(' ')[4]) * 0.85
            
            event.target.parentElement.children[1].textContent = `Buy it only for ${bookPrice.toFixed(2)} BGN`;

            event.target.parentElement.children[2].remove(); 
            bookToMove.remove();

            oldBooks.appendChild(bookToMove);
        });
    });
}