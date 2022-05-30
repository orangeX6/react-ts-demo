/*
-> TypeScript is a 'superset' of JavaScript.
-> Typescript adds static typing to JavaScript
-> JS on its own is dynamically typed 
-> TypeScript does not run in the browser. -> TypeScript Code is converted to JavaScript in the browser

-> Basic Types
>> Primitives : number, string, boolean
>> More Complex Types: Arrays, Objects
>> Function types, Parameters

->> Type Inference
let course = 'React - the complete guide';
course = 12341;
>> this will give an error. TypeScript tries to infer the type of the variable automatically if we don't provide the type.
>> Its a better approach to embrace the type inference and not unnecessarily specify the type explicitly.

-> Using Union Types

-> Type Aliases

-> Generics 
>> Generics helps you write functions which are type Safe yet flexible


-> Type Basics
-> Compiler  and config deep dive
-> Working with next-gen JS code
-> Classes and Interfaces
-> Advanced Types and TypeScript Features
-> Generics
-> Decorators
-> Working with Namespaces and modules
-> Webpack and TS
-> Third-Party Libraries and TS
-> React + TS and NodeJS + TS


-> Type Basics
>> Core Types
# number - 1, 5.3, -10
# string - 'Hi', "Hi", `Hi`
# boolean - true,false
# object  - {age:25}
# array types -  [1,2,3]
# tuple - Added by TypeScript. (Tuple is a fixed length array) - [1,2]
# enum - Added by TypeScript. (Automatically enumerated global constant identifiers)  - enum {NEW,OLD}
# any - * (Any kind of value, no specific type assignment)

>> UNION TYPES 
>> LITERAL TYPES - where we are very clear about the type of value that a variable should hold

-> TYPE ALIAS 

-> Function Return Types and Void

-> Unknown Type
*/

/*

->  to run a file single time
>> tsc app.ts
-> to run a file on every change
>> tsc app.ts --watch 
>> tsc app.ts -w

-> with multiple scripts - running tsc for entire project
? creates tsconfig.json file. with list of options
>> tsc --init
? will watch all the files in the project
>> tsc
-> with watch mode
>> tsc --watch OR 
>> tsc -w

-> Include and exclude files 
>> we can files to include or exclude in the tsconfig.json file. 


>> TS CONFIG JSON FILE (options in Tsconfig.json file)
>> Lib, SourceMap, outDir, rootDir, removeComments, noEmit, domLevelIteration

>> Strict Mode
?? noImplicitAny - ensures we have to be clear about values types for parameters of functions
?? strictNullChecks
?? strictFunctionTypes
?? strictBindCallApply

-> noEmitOnError: false (can add manually) // not mentioned in tsconfig

*/
