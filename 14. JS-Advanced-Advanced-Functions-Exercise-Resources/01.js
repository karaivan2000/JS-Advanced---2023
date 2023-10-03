function advancedFunctions(arr, order){

    if (order === `asc`) {
        arr.sort((a, b) => a - b);
    } else {
        arr.sort((a,b) => b - a);
    }
    return arr;

}   

advancedFunctions([14, 7, 17, 6, 8], 'asc');