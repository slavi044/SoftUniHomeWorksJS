const assert = require("chai").assert;
const app = require('./CharLookup.js');

describe('Correct values and types tests.', () => {
    it('Should return "S"', () => {
        let output = app('String', 0);
        assert.equal(output, 'S');
    });

    it('Should return "g"', () => {
        let output = app('String', 5);
        assert.equal(output, 'g');
    });
});

describe('Incorrect values or types tests.', () => {
    it('Incorrect first parameter.', () => {
        let output = app(0, 0);
        assert.equal(output, undefined);
    });

    it('Incorrect second parameter', () => {
        let output = app('String', '5');
        assert.equal(output, undefined);
    });

    it('Incorrect string index', () => {
        let output = app('String', 6);
        assert.equal(output, 'Incorrect index');
    });

    it('Incorrect string index', () => {
        let output = app('String', -1);
        assert.equal(output, 'Incorrect index');
    });
});