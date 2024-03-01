'use strict';

let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
let input = prompt('Lishan')

let greeting = 'Hello';
if (input === null){
  greeting ='Hello Lishan.';
} else {
  greeting = 'Hello' + input + '!';
}
alert(greeting);


