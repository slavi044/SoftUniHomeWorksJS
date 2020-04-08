const assert = require('chai').assert;
let { Repository } = require("./solution.js");

describe('Tests', () => {
    describe('Instantiation', () => {
        it('Instantiation', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };


            let repository = new Repository(properties);

            assert.deepEqual(repository.props, new Repository(properties).props)

        });
    });

    describe('Getter', () => {
        it('getter return value', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            assert.equal(repository.count, 0);
        });

        it('return value', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let p = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(p);
            repository.add(entity)

            assert.equal(repository.count, 1);
        });
    });

    describe('Add entity', () => {
        it('Add with not correct props', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let repository = new Repository(entity);

            assert.throw(() => repository.add({}), `Property name is missing from the entity!`);
        });


        it('Add with not correct props', () => { // here <<------------
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let repository = new Repository(entity);

            assert.throw(() => repository.add({ name: 1, age: 22, birthday: new Date(1998, 0, 7) }), `Property name is not of correct type!`);
        });

        it('Add with correct props', () => {//here <<-----------------
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let p = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(p);
            let res = repository.add({ name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) })

            assert.equal(res, 0);
        });

        it('Add with correct props', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            assert.equal(repository.add(entity), 0);
        });
    });

    describe('getId()', () => {
        it('not correct props', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let p = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(p);
            repository.add(entity);

            assert.throws(() => repository.getId(123), `Entity with id: 123 does not exist!`);//throw
        });

        it('correct props', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let p = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(p);
            repository.add(entity);

            assert.deepEqual(repository.getId(0), entity);
        });
    });

    describe('update()', () => {
        it('not correct props', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let p = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(p);

            assert.throws(() => repository.update(123), `Entity with id: 123 does not exist!`);
        });
    });

    describe('del()', () => {
        it('not correct props', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let p = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(p);

            assert.throws(() => repository.del(123), `Entity with id: 123 does not exist!`);
        });

        it('not correct props', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let p = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(p);

            assert.throws(() => repository.del(-1), `Entity with id: -1 does not exist!`);
        });

        it('correct props', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let p = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(p);
            repository.add(entity);
            repository.add(entity);
            

            assert.equal(repository.del(0), repository.del(1));
        });
    });
});