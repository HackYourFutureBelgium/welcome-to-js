

'use strict';

console.log('--- in execution phase ---');


/*
  environment: windows edge

  name: SyntaxError
  message: Unexpected token '{'

  location: 27:28 

  life cycle: creation

  the mistake: 

  the fix(es):
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} 
else (userName.length < 5) {
  console.log('just right');
}
else {
  console.log('too long');
}


