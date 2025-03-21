"use strict";
// 1 - Primitive: String, number, boolean, undefined, null
const string = "Hello I'm a string";
const number = 4;
let undefinedVariable = undefined;
let nullVariable = null;
// 2 - Compound: Object, array, enum, function
const person = {
    Name: 'Gustavo',
    Age: 30,
    Courses: ['python', 'css']
};
const array = [1, 2, 3];
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 0] = "Monday";
    weekDays[weekDays["Tuesday"] = 1] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 2] = "Wednesday";
    weekDays[weekDays["Thursday"] = 3] = "Thursday";
    weekDays[weekDays["Friday"] = 4] = "Friday";
    weekDays[weekDays["Saturday"] = 5] = "Saturday";
    weekDays[weekDays["Sunday"] = 6] = "Sunday";
})(weekDays || (weekDays = {}));
function add(a, b) {
    return a + b;
}
const divide = (a, b) => a / b; // Inferred return
function greeting(name, age) {
    if (age !== undefined) {
        return `Hello, my name is ${name} and I have ${age} years old`;
    }
    else {
        return `Hello, my name is ${name}`;
    }
}
// 3 - User defined: Class, interface, type
