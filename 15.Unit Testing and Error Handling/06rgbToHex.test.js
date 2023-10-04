const expect = require(`chai`).expect;
const rgbToHexColor = require(`./06rgbToHex`);

describe(`rgbToHex`, function () {
    it(`with non nteger red, should throw Error`, function () {
        // Arrandge
        let red = {};
        let blue = 100;
        let green = 100;
        
        // Act
        let result = rgbToHexColor(red, green, blue);

        

    });
});