const mathEnforcer = require(`./04MathEnforcer`);
const { assert } = require(`chai`);

describe(`mathEnforcer function tests`, () => {

    describe(`add five function tests`, () => {
        // Test with incorrect input
        it(`Should return undefind with string`, () => {
            assert(mathEnforcer.addFive(`TEST`) === undefined);
        });

        it(`Should return undefind with an array`, () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });

        it(`Should return undefind with an object`, () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });

        it(`Should return undefind with an undefined`, () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });

        it(`Should return undefind with null`, () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });

        //Test with correct input
        it(`Positive integer number + 5`, () => {
            assert(mathEnforcer.addFive(5) === 10);
        });

        it(`Negative number + 5`, () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });

        it(`Decimal number + 5`, () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });

    });

    describe(`subtract ten function tests`, () => {
         // Test with incorrect input
        it(`Should return undefind with string`, () => {
            assert(mathEnforcer.subtractTen(`TEST`) === undefined);
        });

        it(`Should return undefind with an array`, () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });

        it(`Should return undefind with an object`, () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });

        it(`Should return undefind with an undefined`, () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });

        it(`Should return undefind with null`, () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        //Test with correct input
        it(`Positive integer number - 10`, () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });

        it(`Negative number - 10`, () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });

        it(`Decimal number - 10`, () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
    });

    describe(`sum of two numbers function tests`, () => {
        //Tets with correct inputs
        it(`Two posiitive integer numbers`, () => {
            assert(mathEnforcer.sum(10, 20) === 30)
        });

        it(`Two negative  numbers`, () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5)
        });

        it(`Two decimal numbers`, () => {
            assert(mathEnforcer.sum(10.5, 20.5) === 31)
        });

        //Test with incorrect inputs
        it(`First parameter string, second parameter number`, () => {
            assert(mathEnforcer.sum(``, 20) === undefined)
        });

        it(`First parameter number, second parameter string`, () => {
            assert(mathEnforcer.sum(20, ``) === undefined)
        });
    });
});