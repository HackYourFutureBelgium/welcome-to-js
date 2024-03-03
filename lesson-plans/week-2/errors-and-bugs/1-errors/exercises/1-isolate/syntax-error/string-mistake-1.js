

'use strict';

console.log('--- in execution phase ---');


/*
  environment:Windows 10, chrome browser

  name:Uncaught SyntaxError
  message: Invalid or unexpected token

  location:line 23, column 

  life cycle:11

  the mistake: Invalid or unexpected token

  the fix(es):correct the string
*/

const a = 'this is \ntwo lines';
console.log(a);
