let PaymentPackage = require('./06PaymentPackage').PaymentPackage;
let assert = require('chai').assert;

describe('PaymentPackage test Name', () => {
    it('If name is not string', () => {
        let PayPack = () => new PaymentPackage(1, 10)

        assert.throw(PayPack, 'Name must be a non-empty string')
    });

    it('If name is not string', () => {
        let PayPack = () => new PaymentPackage('', 10)

        assert.throw(PayPack, 'Name must be a non-empty string')
    });

    it('If name get new value', () => {
        let obj = new PaymentPackage('Pesho', 10);
        obj.name = 'Gosho';

        assert.equal(obj.name, 'Gosho')
    });
});

describe('PaymentPackage test Value', () => {
    it('If value is string', () => {
        let PayPack = () => new PaymentPackage('Pesho', '')

        assert.throw(PayPack, 'Value must be a non-negative number')
    });

    it('If value is negative number', () => {
        let PayPack = () => new PaymentPackage('Pesho', -1)

        assert.throw(PayPack, 'Value must be a non-negative number')
    });

    it('If value get new value', () => {
        let PayPack = () => new PaymentPackage('Pesho', 10)
        PayPack.value = 11

        assert.equal(PayPack.value, 11)
    });
}); 

describe('PaymentPackage test VAT', () => {
    it('VAT if all is correct', () => {
        let PayPack = new PaymentPackage('Pesho', 10)

        assert.equal(PayPack.VAT, 20)
    });
    
    it('If VAT get negative number', () => {
        let PayPack = new PaymentPackage('Pesho', 10)
        let er = () => PayPack.VAT = -1;

        assert.throw(er, 'VAT must be a non-negative number')
    });

    it('If VAT get string', () => {
        let PayPack = new PaymentPackage('Pesho', 10)
        let er = () => PayPack.VAT = '-1';
        
        assert.throw(er, 'VAT must be a non-negative number')
    });
});

describe('PaymentPackage test active', () => {
    it('Active if all is correct', () => {
        let PayPack = new PaymentPackage('Pesho', 10)

        assert.equal(PayPack.active, true);
    });

    it('If active get not correct value', () => {
        let PayPack = new PaymentPackage('Pesho', 10)
        let er = () => PayPack.active = '';

        assert.throw(er, 'Active status must be a boolean');
    });
});

describe('PaymentPackage test toString', () => {
    it('If all is correct', () => {
        let PayPack = new PaymentPackage('Pesho', 10)
        const output = [
            `Package: ${PayPack.name}` + (PayPack.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${PayPack.value}`,
            `- Value (VAT ${PayPack.VAT}%): ${PayPack.value * (1 + PayPack.VAT / 100)}`
        ].join('\n');

        assert.equal(PayPack.toString(), output);
    });

    it('If active is false', () => {
        let PayPack = new PaymentPackage('Pesho', 10)
        PayPack.active = false;
        const output = [
            `Package: ${PayPack.name}` + (PayPack.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${PayPack.value}`,
            `- Value (VAT ${PayPack.VAT}%): ${PayPack.value * (1 + PayPack.VAT / 100)}`
        ].join('\n');

        assert.equal(PayPack.toString(), output);
    });

    it('If value is 0', () => {
        let PayPack = new PaymentPackage('Pesho', 0)
        const output = [
            `Package: ${PayPack.name}` + (PayPack.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${PayPack.value}`,
            `- Value (VAT ${PayPack.VAT}%): ${PayPack.value * (1 + PayPack.VAT / 100)}`
        ].join('\n');

        assert.equal(PayPack.toString(), output);
    });
});