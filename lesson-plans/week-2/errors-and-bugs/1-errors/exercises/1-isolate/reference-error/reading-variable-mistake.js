'use strict';

console.log('--- in execution phase ---');

/*
  environment:Browser, Chrome, Windows 10

  name:Uncaught ReferenceError: Cannot access 'tomatoes' before initialization
  message:Cannot access 'tomatoes' before initialization

  location: Line number 20 column 13

  life cycle: in execution phase

  the mistake: tomatoes should be declared before

  the fix(es):tomatoes should be declared before
*/
let tomatoes = 'fresh';
console.log(tomatoes);


