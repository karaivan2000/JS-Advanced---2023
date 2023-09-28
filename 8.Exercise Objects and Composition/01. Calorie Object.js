function calorieObject(input) {

    let obj = {};
    let inputL = input.length;

    for (let i = 0; i < inputL; i += 2) {
        let productName = input[i];
        let calories = Number(input[i + 1]);
        obj[productName] = calories;
    }

    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52']);