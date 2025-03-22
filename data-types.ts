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

// Interface
interface Product {
    name: string
    price: number
    description?: string
}

interface Comparator {
    (a: number, b: number): boolean
}

interface Person {
    name: string
    age: number
    greeting(): void
}

type Num = number

type Person1 = {
    name: string
    age: number
    description?: string
}

type Name = string | null

type Comparator1 = {
    (a: number, b: number): boolean
}

type Person2 = {
    name: string
    age: number
    greeting(): void
}