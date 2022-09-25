'use strict';

console.log('--- in execution phase ---');

/*
  environment: edge

  name: ReferenceError
  message: welf is not defined

  location: 20:6 

  life cycle: execution

  the mistake: the variable does not declared 

  the fix(es): should assign variable correctly 
*/
let welf = 'ingrad';
/*
welf = 'ingrad';
*/
console.log(welf);
