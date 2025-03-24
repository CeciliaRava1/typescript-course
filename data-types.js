// 1 - Primitive: String, number, boolean, undefined, null
var string = "Hello I'm a string";
// const number: number = 4
var undefinedVariable = undefined;
var nullVariable = null;
// 2 - Compound: Object, array, enum, function
var person = {
    Name: 'Gustavo',
    Age: 30,
    Courses: ['python', 'css']
};
var array = [1, 2, 3];
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
var divide = function (a, b) { return a / b; }; // Inferred return
function greeting(name, age) {
    if (age !== undefined) {
        return "Hello, my name is ".concat(name, " and I have ").concat(age, " years old");
    }
    else {
        return "Hello, my name is ".concat(name);
    }
}
function greeting2(name, age) {
    if (age === void 0) { age = 30; }
    return "Hello, my name is ".concat(name, " and I have ").concat(age, " years old");
}
// 3 - User defined: Class, interface, type
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greeting = function () {
        console.log("Hello, my name is ".concat(name));
    };
    return Person;
}());
var Movie = /** @class */ (function () {
    function Movie(name, protagonist, actors) {
        // Initialize or ?
        this.name = 'Default name';
        this.name = name,
            this.protagonist = protagonist,
            this.actors = actors;
    }
    Movie.prototype.projectOnCinema = function () {
        console.log("".concat(this.name, " is being projected"));
    };
    return Movie;
}());
var movie = new Movie('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
var movie1 = new Movie('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr.']);
var Draw = /** @class */ (function () {
    function Draw(name) {
        this.name = name;
    }
    Draw.prototype.setTicket = function (ticket) {
        this.ticket = ticket;
    };
    Draw.prototype.getTicket = function () {
        return this.ticket;
    };
    Draw.prototype.draw = function () {
        return "For ".concat(this.name, " the ticket is ").concat(this.ticket);
    };
    return Draw;
}());
var draw = new Draw('Marcos');
draw.setTicket(7);
console.log(draw.draw());
var programmer = {
    name: 'Sergie Code',
    technologies: ['python'],
    drinkMate: true
};
