'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browser, Chrome, Windows 10

  name:Uncaught ReferenceError: Cannot access 'isValidUserName' before initialization
  message:Cannot access 'isValidUserName' before initialization

  location:Line number 24, Column 19

  life cycle:Execution Phase

  the mistake:Cannot access 'isValidUserName' before initialization

  the fix(es):
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName;
if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
