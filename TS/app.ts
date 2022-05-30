//>> UNKNOWN TYPE

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // will give error. Won't give error if type was any. Unknown is a better type than any so if we dont know what type the variable should be but will eventually know about it unknown is better

if (typeof userInput === 'string') {
  userName = userInput;
}

console.log(userInput);

// >> NEVER TYPE
// This function essentially never produces a value. It just throws an error. So we wont see undefined logged on screen. just an error
// function generateError(message: string, code: number) {
//   throw { message: message, errorCode: code };
// }
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('Internal Error Occured', 500);
