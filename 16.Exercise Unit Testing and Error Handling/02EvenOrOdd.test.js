const isOddOrEven = require(`./02EvenOrOdd`);
const { assert } = require(`chai`);

describe(`isOddOrEven function tests`, () => {
    //invalid input tests
    it(`Should return undefined if the parameter is number`, () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it(`Should return undefined if the parameter is a object`, () => {
        assert.equal(isOddOrEven({}), undefined);
    });

    it(`Should return undefined if the parameter is an array`, () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it(`Should return undefined if the parameter is an undefined`, () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });

    it(`Should return undefined if the parameter is an null`, () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    
    //valid unput tests
    it(`Should return even as result`, () => {
        assert.equal(isOddOrEven(`Hi`), `even`);
    });

    it(`Should return odd as result`, () => {
        assert.equal(isOddOrEven(`Hello`), `odd`);
    });

});