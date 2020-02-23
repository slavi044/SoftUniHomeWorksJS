let Parser = require("./solution.js");
let assert = require("chai").assert;

describe("Test Praser class", () => {
    describe('test get data()', () => {
        it('first test', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

            assert.deepEqual(parser.addEntries("Steven:tech-support Edd:administrator"), 'Entries added!');
        });
    });

    describe('test data getter()', () => {
        it('return', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            parser.addEntries("Steven:tech-support Edd:administrator");

            assert.deepEqual(parser.data, [{ Nancy: 'architect' }, { John: 'developer' }, { Kate: 'HR' }, { Steven: 'tech-support' }, { Edd: 'administrator' }]);
        });

        it('ctorr', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            let parser2 = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

            assert.deepEqual(parser.data, parser2.data)
        });
    });

    describe('test print()', () => {
        it('return', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            parser.addEntries("Steven:tech-support Edd:administrator");
            parser.removeEntry("Kate");
            parser.print();

            assert.deepEqual(parser.print(), parser.print());
        });

        it('return second class', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            let parser2 = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

            assert.deepEqual(parser.print(), parser2.print());
        });
    });

    describe('add entries()', () => {
        it('first test', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            let parser2 = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            

            assert.equal(parser.addEntries("Steven:tech-support Edd:administrator"), parser2.addEntries("Steven:tech-support Edd:administrator"));
        });
    });

    describe('remove key()', () => {
        it('first test', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            

            assert.equal(parser.removeEntry("Kate"), "Removed correctly!");
        });

        it('err test', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            

            assert.throws(() => parser.removeEntry("Kat"), "There is no such entry!");
        });
    });

    describe('addToLog tests', () => {
        it('first test)', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            let parser2 = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

            assert.deepEqual(parser._addToLog(), parser2._addToLog());
        });
    });

    describe('log tests', () => {
        it('f test)', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

            assert.deepEqual(parser._log, []); 
        });

        it('sec test)', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            parser.removeEntry("Kate");

            assert.deepEqual(parser._log, [
                  "0: removeEntry"
                ]);
        });
    });

    describe('_data tests', () => {
        it('f test)', () => {
            let parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

            assert.deepEqual(parser._data, JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]')); 
        });

        
    });
});