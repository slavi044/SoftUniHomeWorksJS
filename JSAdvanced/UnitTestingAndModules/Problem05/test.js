let StringBuilder = require('./05StringBuilder.js').StringBuilder;
let assert = require('chai').assert;

describe('StringBuilder bahvior', () => {
    it('test instance', () => {
        let sb = new StringBuilder();

        assert.deepEqual(sb._stringArray, []);
    });

    it('test append', () => {
        let sb = new StringBuilder('a');
        sb.append('b');

        assert.deepEqual(sb._stringArray, ['a', 'b']);
    });

    it('test append', () => {
        let sb = new StringBuilder();
        sb.append('a');

        assert.deepEqual(sb._stringArray, ['a']);
    });

    it('test preppend', () => {
        let sb = new StringBuilder('cd');
        sb.prepend('ab');

        assert.deepEqual(sb._stringArray, ['a','b', 'c', 'd']);
    });

    it('test insertAt', () => {
        let sb = new StringBuilder('ad');
        sb.insertAt('bc', 1);

        assert.deepEqual(sb._stringArray, ['a','b', 'c', 'd']);
    });

    it('test remove', () => {
        let sb = new StringBuilder('abcd');
        sb.remove(1, 10);

        assert.deepEqual(sb._stringArray, ['a']);
    });

    it('test remove', () => {
        let sb = new StringBuilder('abcd');

        assert.equal(sb.toString(), 'abcd');
    });
    
    it('test vrfyString', () => {
        let sb = () => { new StringBuilder(true) };

        assert.throw(sb, 'Argument must be string');
    });    

    it('test vrfyString', () => {
        let sb =  new StringBuilder('abc');

        assert.equal(sb, 'abc');
    });

    it('test append incorrect value', () => {
        let sb = new StringBuilder('asd')
        
        assert.throw(() => sb.append(false), 'Argument must be string');
    });    

    it('test insert incorrect value', () => {
        let sb = new StringBuilder()
        
        assert.equal(sb.toString(), '');
    });   
});