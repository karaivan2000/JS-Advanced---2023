const { expect } = require(`chai`);
const createCalculator = require(`./calc`);


describe(`Calculator`, function () {
    let calc = null;

    beforeEach (() => {
        calc = createCalculator();
    });

    it(`Returns zero initial value`, () => {
        expect(calc.get()).to.equal(0);
    });

    describe(`Number arguments`, () => {
        it(`can add numbers`, () => {
            calc.add(1);
            expect(calc.get()).to.equal(1);
        });
    
        it (`can add move than one number`, () => {
            calc.add(1);
            calc.add(1);
            expect(calc.get()).to.equal(2);
        });
    
        it (`can subtract numbers`, () => {
            calc.subtract(1);
            expect(calc.get()).to.equal(-1);
        });
    
        it (`can add and subtract`, () => {
            calc.add(2);
            calc.subtract(1);
            expect(calc.get()).to.equal(1);
        });
    });

    describe(`String arguments`, () => {
        it(`can add numbers as strings`, () => {
            calc.add(`1`);
            expect(calc.get()).to.equal(1);
        });

        it (`can subtract number as strings`, () => {
            calc.subtract(`1`);
            expect(calc.get()).to.equal(-1);
        });
    });
});