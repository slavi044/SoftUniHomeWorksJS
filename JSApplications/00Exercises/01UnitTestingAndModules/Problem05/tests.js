const assert = require("chai").assert;
const stringBuilder = require('./stringBuilder.js');

describe('Test constructor and toString()', () => {
    it('Without parameter', () => {
        let sb = new stringBuilder();

        assert.equal(sb.toString(), '');
    });

    it('Correct parameter parameter', () => {
        let sb = new stringBuilder('Str');

        assert.equal(sb.toString(), 'Str');
    });

    it('Correct parameter parameter', () => {
        let sb = new stringBuilder('Str str');

        assert.equal(sb.toString(), 'Str str');
    });
});

describe('Test append()', () => {
    it('Test with correct parameter', () => {
        let sb = new stringBuilder('Str str');
        sb.append('.');

        assert.equal(sb.toString(), 'Str str.');
    });

    it('Test with empty string', () => {
        let sb = new stringBuilder('Str str');
        sb.append('');

        assert.equal(sb.toString(), 'Str str');
    });

    it('Test with incorrect parameter', () => {
        let sb = new stringBuilder('Str str');
        
        assert.throws(() => { sb.append() }, 'Argument must be а string')
    });
});

describe('Test prepend()', () => {
    it('Test with correct parameter', () => {
        let sb = new stringBuilder('Str str');
        sb.prepend('!');

        assert.equal(sb.toString(), '!Str str');
    });

    it('Test with correct parameter', () => {
        let sb = new stringBuilder('tr str');
        sb.prepend('!S');

        assert.equal(sb.toString(), '!Str str');
    });

    it('Test with correct parameter', () => {
        let sb = new stringBuilder('Str str');
        sb.prepend('');

        assert.equal(sb.toString(), 'Str str');
    });

    it('Test with incorrect parameter', () => {
        let sb = new stringBuilder('Str str');
        
        assert.throws(() => { sb.prepend() }, 'Argument must be а string')
    });
});

describe('Test insertAt()', () => {
    it('Test with correct parameters', () => {
        let sb = new stringBuilder('Str str');
        sb.insertAt(',', 3);

        assert.equal(sb.toString(), 'Str, str');
    });

    it('Test with correct parameters', () => {
        let sb = new stringBuilder('Strstr');
        sb.insertAt(', ', 3);

        assert.equal(sb.toString(), 'Str, str');
    });

    it('Test with incorrect parameter', () => {
        let sb = new stringBuilder('Str str');
        
        assert.throws(() => { sb.insertAt(3, 3); }, 'Argument must be а string')
    });
});

describe('Test remove()', () => {
    it('Test with correct parameters', () => {
        let sb = new stringBuilder('Str str');
        sb.remove(3, 1);

        assert.equal(sb.toString(), 'Strstr');
    });
});