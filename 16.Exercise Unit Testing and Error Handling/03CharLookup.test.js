const lookupChar = require(`./03CharLookup`);
const { assert } = require(`chai`);

describe(`lookupChar function tests`, () => {

    it(`Return char at index`, () => {
        assert(lookupChar(`Love`, 1) === `o`);
    });

    it(`Return char at index`, () => {
        assert(lookupChar(`L`, 0) === `L`);
    });

    it(`Return incorrect index if it is over the string length`, () => {
        assert(lookupChar(`Love`, 10) === `Incorrect index`);
    });

    it(`Negative string index`, () => {
        assert(lookupChar(`Love`, -10) === `Incorrect index`);
    });

    it(`Empty string as input`, () => {
        assert(lookupChar(``, 0) === `Incorrect index`);
    });

    it(`Return undefind if the first parameter is not string`, () => {
        assert(lookupChar(100, 10) === undefined);
    });

    it(`Return undefind with string first parameter and decima second`, () => {
        assert(lookupChar(`Love`, 10.5) === undefined);
    });

    it(`Return undefind with wrong parameters types`, () => {
        assert(lookupChar(10, `10.5`) === undefined);
    });

});