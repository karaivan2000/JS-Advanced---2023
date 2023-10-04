const assert = require(`assert`).strict;
const solve = require(`./01`);
const assert = require(`chai`).assert;
it(`Should calculate sub-sum `, () => {
    //Arrange
    let expectedSum = 150;
    let numbers = sumSum([10, 20, 30, 40, 50, 60]);
    let strartIndex = 3;
    let endIndex = 300;

    //Act
    let actualSum = solve(numbers, strartIndex, endIndex);

    //Assert
    assert.equal(actualSum, expectedSum);
});


    
  

