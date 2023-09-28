function storeCatalogue(array) {

    let result = array.sort((a, b) => a.localeCompare(b));
    let resultL = result.length;
    let currentEl = [];
    let char = ``;
    for (let i = 0; i < resultL; i++) {
        currentEl = result[i].split(` : `);
        if (result[i][0] !== char) {
            console.log(result[i][0]);
        }
        console.log(`  ${currentEl[0]}: ${currentEl[1]}`);
        char = result[i][0];
    };
}


storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);