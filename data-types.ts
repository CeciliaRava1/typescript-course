// 1 - Primitive: String, number, boolean, undefined, null
const string: string = "Hello I'm a string"
// const number: number = 4
let undefinedVariable: undefined = undefined
let nullVariable: null = null

// 2 - Compound: Object, array, enum, function
const person = {
    Name: 'Gustavo',
    Age: 30,
    Courses: ['python', 'css']
}

const array: number[] = [1, 2, 3]

enum weekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// Function
function add(a: number, b: number): number {
    return a + b
}

const divide = (a: number, b: number) => a/b // Inferred return

function greeting(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, my name is ${name} and I have ${age} years old`
    } else {
        return `Hello, my name is ${name}`
    }
}

function greeting2(name: string, age: number = 30): string {
    return `Hello, my name is ${name} and I have ${age} years old`
}

// 3 - User defined: Class, interface, type
class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log(`Hello, my name is ${name}`)
    }
}


class Movie {
    // Initialize or ?
    name: string = 'Default name'
    protagonist?: string[]
    actors?: string[]

    projectOnCinema() {
        console.log(`${this.name} is being projected`)
    }

    constructor(name: string, protagonist: string[], actors: string[]) {
        this.name = name,
        this.protagonist = protagonist,
        this.actors = actors
    }
}

const movie = new Movie('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling'])
const movie1 = new Movie('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr.'])


class Draw<T> {
    // Idk data type
    private ticket?: T

    constructor(private name: string) {}

    setTicket(ticket:T) {
        this.ticket = ticket
    }

    getTicket() {
        return this.ticket
    }

    public draw(): string {
        return `For ${this.name} the ticket is ${this.ticket}`
    }
}

let draw = new Draw<number>('Marcos')
draw.setTicket(7)
console.log(draw.draw())


// Interface
interface Product {
    name: string,
    price: number,
    description?: string
}

interface Comparator {
    (a: number, b: number): boolean
}

interface Person {
    name: string,
    age: number,
    greeting(): void
}

interface Programmer {
    name: string,
    technologies: string[],
    drinkMate?: boolean | null
}

let programmer: Programmer = {
    name: 'Sergie Code',
    technologies: ['python'],
    drinkMate: true
}

// Type
type Num = number

type Person1 = {
    name: string,
    age: number,
    description?: string
}

type Name = string | null

type Comparator1 = {
    (a: number, b: number): boolean
}

type Person2 = {
    name: string,
    age: number,
    greeting(): void
}