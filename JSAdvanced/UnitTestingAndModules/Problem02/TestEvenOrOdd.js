let isOddOrEven = require('./Problem02EvenOrOdd');
let assert = require('chai').assert;

describe('isOddOrEven() behavior', () => {
    it('Check if function dont get string', () => {
        let result = isOddOrEven(5);

        assert.equal(result, undefined ,'Should return undefined');
    });

    it('Check function result', () => {
        let result = isOddOrEven('abc');

        assert.equal(result, 'odd' ,'Should return odd');
    });

    it('Check function result', () => {
        let result = isOddOrEven('ab');

        assert.equal(result, 'even' ,'Should return even');
    });
});