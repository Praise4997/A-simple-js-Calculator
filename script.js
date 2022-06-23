
const operator = prompt('Enter Operator ( either + , -, * , / , % , ) : ');

const number1 = parseFloat(prompt('Enter First Number: '));
const number2 = parseFloat(prompt('Enter Second Number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2; 
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number1 / number2;
}
else if (operator == '%') {
    result = number1 % number2;
}

document.write(number1 + operator + number2 + '     =    ' + result);

alert("Refresh page to perform another operation!");
