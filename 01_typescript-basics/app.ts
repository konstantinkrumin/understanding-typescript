let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// Type 'unknown' is not assignable to type 'string'
// userName = userInput;

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError('An error occurred', 500);
