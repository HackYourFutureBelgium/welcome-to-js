

'use strict';

console.log('--- in execution phase ---');


/*
  environment:Windows 10, chrome browser

  name:Uncaught SyntaxError
  message:Unexpected token

  location:line 27, column 30

  life cycle:Creation error

  the mistake:Unexpected token

  the fix(es): declare else condition correctly. use else if in second body
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


