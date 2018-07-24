const rs = require('readline-sync');

do {
    var firstNum = rs.question("Enter a number: ");
    var operator = rs.question("Enter an operator (choose one: +, -, *, /): ");
    var secondNum = rs.question("Enter another number: ");

    var operation = firstNum + operator + secondNum;
    var result = eval(operation);

    console.log(result);

    var loop = rs.question("Do you want to run again?: Y/N ");
} while (loop.toLowerCase() == 'y');