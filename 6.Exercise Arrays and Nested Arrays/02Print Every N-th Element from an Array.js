function printN(array, step) {
    let resultArr = [];
    for (let i = 0; i < array.length; i += step) {
        resultArr.push(array[i]);
    }
   return resultArr;
}

printN(['5',

'20',

'31',

'4',

'20'],

2);