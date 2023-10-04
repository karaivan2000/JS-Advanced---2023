const expect = require(`chai`).expect;
const sum = require(`./04sumOfNumbers`);

describe(`Sum of Numbers`, () => {
    it(`Should return the sum of numbers in the array`, () =>{
        let numbers = [1, 2, 3, 4, 5];
        let expectedSum = 15;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(expectedSum);
    });

    it(`Should return the sum with negative number in the array`, () =>{
        let numbers = [1, 2, 3, 4, -5];
        let expectedSum = 5;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(expectedSum);
    });

    it(`Should return the zero when only zeroes are given`, () =>{
        let numbers = [1, 2, 3, 4, -5];
        let expectedSum = 5;
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(expectedSum);
    });

    
});