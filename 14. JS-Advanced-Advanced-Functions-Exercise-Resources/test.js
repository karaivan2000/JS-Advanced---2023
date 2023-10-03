function solution() {
    let library = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein:10, carbohydrate: 10, fat: 10, flavour: 10},
    };

    let storedElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
function manager(str) {
    let [command, action, quantity] = str.split(` `);
    quantity = Number(quantity);
    if (command === `prepare`) {
        //{carbohydrate: 1, flavour: 2}
        for (const el in library[action]) { // el = carbohydrate, flavour
           if (library[action][el] * quantity > storedElements[el]) {
            return `Error not enough ${el} in stock`
           }
        }

        for (let el in library[action]) {
            storedElements[el] -= library[action][el] * quantity;
        } 
        return `Success`;
    } else if (command === `restock`) {
        storedElements[action] += quantity;
        return `Success`;
    } else if (command === `report`) {
        let result = [];
        for (let el in storedElements) {
            result.push(`${el}=${storedElements[el]}`);
        }
        return result.join(` `);
    }

}
return manager;
}
