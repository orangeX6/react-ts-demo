//Primitives

// Number - number Object (capital)
// number - primitive type (lowercase)

// let age: number;
// age = 12;
let age: number = 12;

let userName: string | string[];
userName = 'PS';

let isInstructor: boolean;
isInstructor = true;

//  More Complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];
let hobbies2: number[];
let hobbies3: boolean[];

// Type Aliases
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

let people: Person[];

people = [
  { name: 'Max', age: 32 },
  { name: 'Pranav', age: 36 },
];

// type inference
let course2 = 'React - the complete guide';
// course = 12341;  -> error

// union types
let course: string | number = 'React - the complete guide';
course = 12341;

// Functions and Function Types
function add(a: number, b: number): number | string {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

//  Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
