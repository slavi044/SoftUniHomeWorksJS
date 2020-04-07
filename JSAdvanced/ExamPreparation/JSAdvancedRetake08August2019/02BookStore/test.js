const assert = require('chai').assert;
const BookStore = require('./BookStore.js');

describe('Tests', () => {
    describe('Instance tests', () => {
        it('Name', () => {
            let bookStore = new BookStore('gosho');
            assert.equal(bookStore.name, 'gosho', 'Names are not equal');
        });

        it('Books', () => {
            let bookStore = new BookStore('gosho');
            assert.deepEqual(bookStore.books, [], 'Books are not equal');
        });

        it('Workers', () => {
            let bookStore = new BookStore('gosho');
            assert.deepEqual(bookStore.workers, [], 'Workers are not equal');
        });
    });

    describe('Test stockBooks()', () => {
        it('Add books', () => {
            let bookStore = new BookStore('gosho');
            bookStore.stockBooks(['Inferno-Dan Braun']);

            assert.deepEqual(bookStore.books, [{ "author": "Dan Braun", "title": "Inferno" }], 'Books are not equal');
        });

        it('Add books compare returned string', () => {
            let bookStore = new BookStore('gosho');

            assert.equal(bookStore.stockBooks(['Inferno-Dan Braun']), bookStore.books);
        });
    });

    describe('Test hire()', () => {
        it('Add worker', () => {
            let bookStore = new BookStore('gosho');
            bookStore.hire('gosho', 'chistach');

            assert.deepEqual(bookStore.workers, [{ 'booksSold': 0, "name": "gosho", "position": "chistach" }], 'Workers are not equal');
        });

        it('Return add worker', () => {
            let bookStore = new BookStore('gosho');


            assert.equal(bookStore.hire('gosho', 'chistach'), `gosho started work at gosho as chistach`, 'Workers are not equal');
        });

        it('Add worker second time', () => {
            let bookStore = new BookStore('gosho');
            bookStore.hire('gosho', 'chistach');


            assert.throw(() => bookStore.hire('gosho', 'chistach'), 'This person is our employee');
        });
    });
});

describe('Test fire()', () => {
    it('Invalid name should throw err', () => {
        let bookStore = new BookStore('gosho');
        bookStore.hire('gosho', 'chistach');

        assert.throw(() => bookStore.fire('pesho'), `pesho doesn't work here`);
    });

    it('Compare returned string', () => {
        let bookStore = new BookStore('gosho');
        bookStore.hire('gosho', 'chistach');

        assert.equal(bookStore.fire('gosho'),`gosho is fired`)
    });

    it('Compare workers', () => {
        let bookStore = new BookStore('gosho');
        bookStore.hire('gosho', 'chistach');
        bookStore.fire('gosho');

        assert.deepEqual(bookStore.workers, []);
    });
});

describe('Test printWorkers()', () => {
    it('Is correct string', () => {
        let bookStore = new BookStore('gosho');
        bookStore.hire('gosho', 'chistach');

        let expectedString = `Name:gosho Position:chistach BooksSold:0`

        assert.equal(bookStore.printWorkers(), expectedString);
    });
});

describe('Test sellBook()', () => {
    it('If book is not correct', () => {
        let bookStore = new BookStore('gosho');
        bookStore.hire('gosho', 'chistach');
        bookStore.stockBooks(['Inferno-Dan Braun']);

        assert.throw(() => bookStore.sellBook('Lord Of The Rings', 'gosho'), 'This book is out of stock');
    });

    it('If worker is not correct', () => {
        let bookStore = new BookStore('gosho');
        bookStore.hire('gosho', 'chistach');
        bookStore.stockBooks(['Inferno-Dan Braun']);

        assert.throw(() => bookStore.sellBook('Inferno', 'pesho'), `pesho is not working here`);
    });

    it('If all is correct', () => {
        let bookStore = new BookStore('gosho');
        bookStore.hire('gosho', 'chistach');
        bookStore.stockBooks(['Inferno-Dan Braun']);
        bookStore.sellBook('Inferno', 'gosho');

        assert.equal(bookStore.workers[0].booksSold, 1);
    });
});