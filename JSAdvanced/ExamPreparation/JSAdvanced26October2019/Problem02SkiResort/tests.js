let SkiResort = require('./solution');
let assert = require('chai').assert;

describe('SkiResort tests', function () {
    describe('SkiResort Instantiation', function () {
        it('Instantiation SkiResort (name)', function () {
            let skiResort = new SkiResort('Pri Slavi');

            assert.equal(skiResort.name, 'Pri Slavi');
        });
    });

    describe('Method build tests', function () {
        it('If name is empty throw error', function () {
            let skiResort = new SkiResort('Pri Slavi');

            assert.throw(() => skiResort.build('', 2), "Invalid input");
        });

        it('Ifbeds < 1 should throw error', function () {
            let skiResort = new SkiResort('Pri Slavi');

            assert.throw(() => skiResort.build('Hotel', 0), "Invalid input");
        });

        it('If receive correct paremeters', function () {
            let skiResort = new SkiResort('Pri Slavi');

            assert.equal(skiResort.build('Hotel', 2), `Successfully built new hotel - Hotel`);
        });

        it('If receive correct paremeters', function () {
            let skiResort = new SkiResort('Pri Slavi');

            skiResort.build('Hotel', 2)

            for (const hotel of skiResort.hotels) {
                assert.equal(hotel.name, 'Hotel');
            }
        });
    });

    describe('Method bestHotel tests', function () {
        it('If have no voters', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 20);
            skiResort.book('Pri Slavi', 2); 
            skiResort.leave('Pri Slavi', 2, 5);

            let skiResort2 = new SkiResort('Pri Gosho');
            skiResort.build('Pri Gosho', 20);
            skiResort.book('Pri Gosho', 2); 
            skiResort.leave('Pri Gosho', 2, 4);

            assert.equal(skiResort.bestHotel, 'Best hotel is Pri Slavi with grade 10. Available beds: 20');
        });

        it('If have no voters', function () {
            let skiResort = new SkiResort('Pri Slavi');

            assert.equal(skiResort.bestHotel, "No votes yet");
        });
    });

    describe('Method book tests', function () {
        it('If name is empty', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 2);

            assert.throws(() => skiResort.book('', 2), "Invalid input");
        });

        it('If beds < 1', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 2);
            
            assert.throws(() => {skiResort.book('Pri Slavi', 0)}, "Invalid input");
        });

        it('If there is no such hotel', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 2);
            
            assert.throws(() => {skiResort.book('Pri slavi', 2)}, "There is no such hotel");
        });

        it('If is no free space', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 1);
            
            assert.throws(() => {skiResort.book('Pri Slavi', 2)}, "There is no free space");
        });

        it('If all is correct', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 2);
            
            assert.equal(skiResort.book('Pri Slavi', 2), "Successfully booked");
        });
    });

    describe('Method leave tests', function () {
        it('If name is empty or beds < 1', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 20);
        
            assert.throws(() => skiResort.leave('', 2, 5), "Invalid input");
            assert.throws(() => skiResort.leave('Pri Slavi', 0, 5), "Invalid input");
        });

        it('If there is no such hotel', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 20);
        
            assert.throws(() => skiResort.leave('pri slave', 2, 5), "There is no such hotel");
        });

        it('If all is correct', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 20);
            skiResort.book('Pri Slavi', 2);
            let hotel = skiResort.hotels.find((h) => h.name === "Pri Slavi");
        
            assert.equal(skiResort.leave('Pri Slavi', 2, 5), `2 people left ${hotel.name} hotel`);
        });
    });

    describe('Test method averageGrade()', function () {
        it('If have no voters', function () {
            let skiResort = new SkiResort('Pri Slavi');

            assert.equal(skiResort.averageGrade(), 'No votes yet');
        }) 

        it('If have voters', function () {
            let skiResort = new SkiResort('Pri Slavi');
            skiResort.build('Pri Slavi', 20);
            skiResort.book('Pri Slavi', 2); 
            skiResort.leave('Pri Slavi', 2, 5);

            assert.equal(skiResort.averageGrade(), 'Average grade: 5.00');
        });
    });
});