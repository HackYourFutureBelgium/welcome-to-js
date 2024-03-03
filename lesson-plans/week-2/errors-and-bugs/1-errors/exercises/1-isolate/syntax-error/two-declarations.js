'use strict';

console.log('--- in execution phase ---');

/*
  environment:Windows 10, chrome browser

  name:Uncaught SyntaxError
  message:Identifier 'tree' has already been declared

  location:line 22, column 5

  life cycle:creation

  the mistake:Identifier 'tree' has already been declared

  the fix(es): remoe second decaltion for tree and assign the values
*/

let tree = 'oak';

tree = 'birch';

console.log(tree);