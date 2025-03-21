// 1 - Primitive: String, number, boolean, undefined, null
const string: string = "Hello I'm a string"
const number: number = 4
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

// 3 - User defined: Class, interface, type


