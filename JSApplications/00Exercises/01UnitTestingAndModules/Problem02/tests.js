const assert = require("chai").assert;
const app = require('./solution.js');

describe('isOddOrEven() tests', () => {
    it('Should return "even".', () => {
        let result = app.isOddOrEven('roar');
        assert.equal('even', result);
    });

    it('Should return "odd".', () => {
        let result = app.isOddOrEven('car');
        assert.equal('odd', result);
    });

    it('Should return "undefined".', () => {
        let result = app.isOddOrEven(0);
        assert.equal(undefined, result);
    });
});