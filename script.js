
var welcome = window.prompt("Welcome to JS simple Calculator");
var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");
var operator = window.prompt("Enter the operation you would like to perform (+ , - , / , * , % ,)");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result = 0;
if(isNaN(num1)|| isNaN(num2)){
    alert("Wrong input! Refresh the page again and provide data!");
}
else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }else if(operator == '%'){
        result = num1 % num2;
    }

document.write(num1 + operator + num2 + '   =   ' + result);
}
