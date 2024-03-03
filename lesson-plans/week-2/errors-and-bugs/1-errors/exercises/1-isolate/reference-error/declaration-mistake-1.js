'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browser, Chrome, Windows 10

  name:Uncaught ReferenceError, welf is not defined
  message:welf is not defined

  location:Line number 20, Column 6

  life cycle:Execution Phase

  the mistake:Welf is not defined

  the fix(es):declare welf
*/

let welf;
welf = 'ingrad';

console.log(welf);
