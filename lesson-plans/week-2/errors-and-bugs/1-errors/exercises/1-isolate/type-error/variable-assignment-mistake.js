

'use strict';

console.log('--- in execution phase ---');


/*
  environment:Windows 10, chrome browser

  name:Uncaught SyntaxError
  message:Invalid left-hand side in assignment

  location:line 25, column 1

  life cycle:creation

  the mistake:Invalid left-hand side in assignment

  the fix(es):fix true assignment
*/

let isHappy = false;

isHappy=true;
console.log(isHappy);

