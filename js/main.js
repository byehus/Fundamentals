// Variables tasks

// Task 1 - Working with variables

// let name, admin;

// name = "John";

// admin = name;

// alert(admin);

// Task 2 - Giving the right name

// const ourPlanet = "Earth";

// let currentUserName = "John";

// alert(ourPlanet);

// alert(currentVisitor);

// Task 3 - Uppercase const?

// const BIRTHDAY = '18.04.1982'; // this should be uppercase since birthday does not change

// const age = someCode(birthday);


// Basic operators, maths

// Task 1 - The postfix and prefix forms

// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1

// a = 2
// b = 2

// Task 2 - Assignment result

// let a = 2;

// let x = 1 + (a *= 2); // x = 5, a = 4

// Task 3 - Type conversions

// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // " -9 5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// Task 4 - Fix the addition

// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);

// alert(a + b);

// Conditional branching: if, '?'

// Task 1 - if (a string with zero)

// if ("0") {
//   alert( 'Hello' ); // Hello
// }


// Task 2 - The name of JavaScript

// let value = prompt("What\'s the \“official\” name of JavaScript?", "");

// if (value == "ECMAScript") {
//     alert("Right!")
// } else {
//     alert("You don\'t know? \“ECMAScript\”!")
// };

// Task 3 - Show the sign

// let number = +prompt("Choose a number", "");

// if (number > 0) {
//     alert("1")
// } else if (number < 0) {
//     alert("-1")
// } else {
//     alert("0")
// };

// Task 4 Rewrite 'if..else' into '?'

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//     (login == '') ? 'No login' :
//     '';

