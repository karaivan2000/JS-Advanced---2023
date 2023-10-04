const {expect} = require(`chai`);
const isSymmetric = require(`./05.isSymetric`);


describe (`Symetry checker`, function() {
     it(`return true for symetric array`, () =>{
        const arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
     });

     it (`returns false for non-symetrics array`, () => {
        const arr = [1, 2, 3];
        expect(isSymmetric(arr)).to.be.false;
     });

     it (`returns false with non-array argument`, () => {
        const data = 121;
        expect(isSymmetric(data)).to.be.false;
     });

     it (`returns true when length is odd`, () => {
        const arr = [1, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
     });

     it (`returns false for array like arguments`, () => {
        const data = `1221`;
        expect(isSymmetric(data)).to.be.false;
     });

});