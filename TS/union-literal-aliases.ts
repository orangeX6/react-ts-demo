// -> UNION TYPES

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(50, 19);
// console.log(combinedAges);

// const combinedNames = combine('Sakshi', 'Pranav');
// console.log(combinedNames);

// -> LITERAL TYPES AND TYPE ALIAS

//>> type alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  // input1: number | string,
  // input2: number | string,
  input1: Combinable,
  input2: Combinable,
  // resultConversion: 'as-number' | 'as-text' // union type with literal types
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(50, 19, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('25', '16', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Orange', 'Pranav', 'as-text');
console.log(combinedNames);
