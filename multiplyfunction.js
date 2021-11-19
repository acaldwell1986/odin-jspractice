let number = prompt(`What number 1?`);
let number2 = prompt(`What number 2?`);

function multiply (num1, num2) {
    let product = parseInt(num1) * parseInt(num2)
    return product;
}

console.log(multiply(number, number2))