function addTwo(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult === true) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const num1 = '6';
const num2 = 6.8;
const printResultOne = true;
const resultPhrase = 'Result is: ';

addTwo(+num1, num2, printResultOne, resultPhrase);
