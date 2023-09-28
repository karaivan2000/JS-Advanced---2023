function subtract() {
    let num1 = document.getElementById(`firstNumber`);
    let firstNumber = Number(num1.value);
    
    let num2 = document.getElementById(`secondNumber`);
    let secondNumber = Number(num2.value);
    
    let result = firstNumber - secondNumber;
    let resultElement = document.getElementById(`result`);
    resultElement.textContent = result;
    
}