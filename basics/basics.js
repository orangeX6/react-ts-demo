//Primitives
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Number - number Object (capital)
// number - primitive type (lowercase)
// let age: number;
// age = 12;
var age = 12;
var userName;
userName = 'PS';
var isInstructor;
isInstructor = true;
//  More Complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var hobbies2;
var hobbies3;
var person;
person = {
    name: 'Max',
    age: 32
};
var people;
people = [
    { name: 'Max', age: 32 },
    { name: 'Pranav', age: 36 },
];
// type inference
var course2 = 'React - the complete guide';
// course = 12341;  -> error
// union types
var course = 'React - the complete guide';
course = 12341;
// Functions and Function Types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
//  Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
