"use strict";
// 1 - Primitive: String, number, boolean, undefined, null
const string = "Hello I'm a string";
// const number: number = 4
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
// Function
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
function greeting2(name, age = 30) {
    return `Hello, my name is ${name} and I have ${age} years old`;
}
// 3 - User defined: Class, interface, type
class Person {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hello, my name is ${name}`);
    }
}
