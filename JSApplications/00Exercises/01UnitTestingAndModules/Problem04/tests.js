const assert = require("chai").assert;
const app = require('./matchEnforcer.js');

describe('Test addFive()', () => {
    it('Correct parameter test.', () => {
        let output = app.addFive(5);
        
        assert.equal(output, 10);
    });

    it('Incorrect parameter test.', () => {
        let output = app.addFive('5');
        
        assert.equal(output, undefined);
    });
});

describe('Test subtractTen()', () => {
    it('Correct parameter test.', () => {
        let output = app.subtractTen(5);
        
        assert.equal(output, -5);
    });

    it('Incorrect parameter test.', () => {
        let output = app.subtractTen('5');
        
        assert.equal(output, undefined);
    });
});

describe('Test sum()', () => {
    it('Correct parameters test.', () => {
        let output = app.sum(5, 5);
        
        assert.equal(output, 10);
    });

    it('Incorrect first parameter test.', () => {
        let output = app.sum('5', 5);
        
        assert.equal(output, undefined);
    });

    it('Incorrect second parameter test.', () => {
        let output = app.sum(5, {});
        
        assert.equal(output, undefined);
    });
});