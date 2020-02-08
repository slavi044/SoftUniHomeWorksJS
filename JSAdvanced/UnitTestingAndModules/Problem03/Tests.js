let lookupChar = require('./LookupChar');
let assert = require('chai').assert;

describe('lookupChar() behavior', () => {
    it('If first parameter is not correct', () => {
        let result = lookupChar(123, 1);

        assert.equal(result, undefined, 'Should return undefined')
    });

    it('If second parameter is not correct', () => {
        let result = lookupChar('abc', 'a');

        assert.equal(result, undefined, 'Should return undefined')
    });

    it('If index is not correct(is not int)', () => {
        let result = lookupChar('abc', 1.2);

        assert.equal(result, undefined, 'Should return undefined');
    });

    it('If index is not correct(negative index)', () => {
        let result = lookupChar('abc', -1);

        assert.equal(result, 'Incorrect index', 'Should return Incorrect index');
    });

    it('If index is not correct(index is more than length)', () => {
        let result = lookupChar('abc', 5);

        assert.equal(result, 'Incorrect index', 'Should return Incorrect index');
    });

    it('If all is correct', () => {
        let result = lookupChar('abc', 1);

        assert.equal(result, 'b', 'Should return b');
    });
});