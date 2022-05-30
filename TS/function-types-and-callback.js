"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// void type
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
//>> FUNCTION TYPE
// let combineValues: Function;
let combineValues;
combineValues = add;
// combineValues = printResult;
//combineValues = 5
console.log(combineValues(6, 8));
//>> FUNCTION TYPE WITH CALLBACKS
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (res) => {
    console.log(res);
    // we can return even though we have specified callback to return void but we cannot do anything with the returned value coz we have specified it returns void
    return res;
});
