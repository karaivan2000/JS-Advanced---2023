function solve(input) {
    let firstElement = input.shift();
    let lastElement = input.pop();

    let firstNumber = Number(firstElement);
    let lastNumber = Number(lastElement);

    let sum = firstNumber + lastNumber;

    return sum;
}