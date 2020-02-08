let mathEnforcer = require('./04MathEnforcer').mathEnforcer;
let assert = require('chai').assert;

describe('mathEnforcer() behavior', () => {
    it('Test addFive() if get not correct parameter', () => { // addFive()
        let result = mathEnforcer.addFive('a');

        assert.equal(result, undefined, 'Should return undefined');
    });

    it('Test addFive()', () => {
        let result = mathEnforcer.addFive(5);

        assert.equal(result, 10, 'Should return 10')
    });

    it('Test addFive() get negative parameter', () => {
        let result = mathEnforcer.addFive(-5);

        assert.equal(result, 0, 'Should return 0')
    });

    it('Test addFive() get floating point parameter', () => {
        let result = mathEnforcer.addFive(5.1);

        assert.equal(result, 10.1, 'Should return 10.1')
    });

    it('Test substrackTen() if get not correct parameter', () => { // substractTen()
        let result = mathEnforcer.subtractTen('10');

        assert.equal(result, undefined, 'Should return undefined')
    });

    it('Test substrackTen()', () => {
        let result = mathEnforcer.subtractTen(10);

        assert.equal(result, 0, 'Should return 0')
    });

    it('Test substrackTen() get negative parameter', () => {
        let result = mathEnforcer.subtractTen(-10);

        assert.equal(result, -20, 'Should return 10')
    });

    it('Test substrackTen() get floating point paremeter', () => {
        let result = mathEnforcer.subtractTen(10.1);

        assert.closeTo(result, 0.1 ,0.1) //result, 0.1, 'Should return 0.1' ????
    });

    it('Test sum() if first parameter is not correct', () => { // sum
        let result = mathEnforcer.sum('1', 10);

        assert.equal(result, undefined, 'Should return undefined')
    });

    it('Test sum() if second parameter is not correct', () => {
        let result = mathEnforcer.sum(1, '10');

        assert.equal(result, undefined, 'Should return undefined')
    });

    it('Test sum()', () => {
        let result = mathEnforcer.sum(1, 10);

        assert.equal(result, 11, 'Should return 11')
    });

    it('Test sum() if first parameter is floating point', () => {
        let result = mathEnforcer.sum(1.1, 10);

        assert.equal(result, 11.1, 'Should return 11.1')
    });

    it('Test sum() if second parameter is floating point', () => {
        let result = mathEnforcer.sum(1, 10.1);

        assert.equal(result, 11.1, 'Should return 11.1')
    });
});