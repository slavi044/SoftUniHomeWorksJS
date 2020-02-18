let PizzUni = require('./02. PizzUni');
let assert = require('chai').assert;

describe('PizzUni tests', () => {
    describe('Test registerEmail()', () => {
        it('If user dose exist', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';
            pizzUni.registerUser(email);

            assert.throws(() => pizzUni.registerUser(email), `This email address (${email}) is already being used!`);
        });

        it('If all is correct', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';
            const currentUser = {
                email: email,
                orderHistory: []
            };

            assert.deepEqual(pizzUni.registerUser(email), currentUser);
        });
    });

    describe('Test makeAnOrder()', () => {
        it('If user dose NOT exist', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';

            assert.throws(() => pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola'), `You must be registered to make orders!`);
        });

        it('If pizza is not exists', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';
            pizzUni.registerUser(email);

            assert.throws(() => pizzUni.makeAnOrder(email, 'Italian ', 'Coca-Cola'), 'You must order at least 1 Pizza to finish the order.');
        });

        it('If all is correct', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';
            pizzUni.registerUser(email);

            assert.deepEqual(pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola'), 0)
        });
    });

    describe('Test completeOrder()', () => {
        it('If have orders', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';
            pizzUni.registerUser(email);
            pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola');

            let userOrder = {
                orderedPizza: 'Italian Style',
                orderedDrink: 'Coca-Cola'
            };

            const currentOrder = {
                ...userOrder,
                email: email,
                status: 'completed'
            };


            assert.deepEqual(pizzUni.completeOrder(), currentOrder);
        });

        it('If havent orders', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';
            pizzUni.registerUser(email);

            assert.deepEqual(pizzUni.completeOrder(), undefined);
        });
    });

    describe('Test detailsAboutMyOrder()', () => {
        it('If have orders', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';
            pizzUni.registerUser(email);
            pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola');

            assert.deepEqual(pizzUni.detailsAboutMyOrder(0), `Status of your order: ${pizzUni.orders[0].status}`);
        });
    });

    describe('Test doesTheUserExist()', () => {
        it('If have orders', () => {
            let pizzUni = new PizzUni();
            let email = 'slavi044@abv.bg';
            let obj = {
                email: email,
                orderHistory: []
            }

            assert.deepEqual(pizzUni.registerUser(email), obj);
        });
    });
});